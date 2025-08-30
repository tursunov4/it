// app/blog/[slug]/page.tsx
"use client";

import api from "@/api/api";
import { BlogType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>(); // ✅ params o‘rniga useParams()
  const [data, setData] = useState<BlogType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingRelated, setLoadingRelated] = useState(true);

  const router = useRouter();

  // Fetch single blog
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/blog/${slug}/`);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchPost();
  }, [slug]);

  // Fetch related posts
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await api.get(`/blog/${slug}/similar/`);
        setRelatedPosts(res.data);
      } catch (err) {
        console.error("Error fetching related posts:", err);
      } finally {
        setLoadingRelated(false);
      }
    };
    if (slug) fetchRelated();
  }, [slug]);

  return (
    <div className="min-h-screen py-10 text-white">
      <div className="container">
        {/* Breadcrumb */}
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C] text-[12px] md:text-[14px] mb-4">
          <Link href="/">Главная</Link> <span>/</span>
          <Link href="/blog">Блог</Link>
          <span>/</span>
          <span className="text-white">{data?.title || "Загрузка..."}</span>
        </div>

        {/* Post Title */}
        {loading ? (
          <div className="h-8 w-2/3 bg-[#2A2830] rounded animate-pulse mb-6" />
        ) : (
          <h1 className="font-semibold mb-[20px] md:mb-[30px] text-[20px] md:text-[34px]">
            {data?.title}
          </h1>
        )}

        {/* Post Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 md:mb-[48px]">
          {/* Image */}
          <div className="w-full h-[300px] md:h-[490px] bg-[#2A2830] rounded-[16px] overflow-hidden md:rounded-[22px]">
            {loading ? (
              <div className="w-full h-full animate-pulse bg-[#2A2830]" />
            ) : (
              <Image
                src={data?.image || "/placeholder.png"}
                alt={data?.title || "Post image"}
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Meta + short content */}
          <div>
            {loading ? (
              <div className="h-4 w-24 bg-[#2A2830] rounded animate-pulse mb-6" />
            ) : (
              <div className="flex gap-1 mb-[28px] items-center">
                <Image
                  width={13}
                  height={13}
                  src="/svg/pencil.svg"
                  alt="pencil"
                />
                <span className="font-normal text-[13px] leading-[138%]">
                  {data?.created_at?.slice(0, 10)}
                </span>
              </div>
            )}

            {loading ? (
              <div className="space-y-2">
                <div className="h-4 w-full bg-[#2A2830] rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-[#2A2830] rounded animate-pulse" />
              </div>
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: data?.content || "" }}
                className="font-normal leading-[138%] text-[12px] md:text-[16px]"
              ></p>
            )}
          </div>
        </div>

        {/* Related posts */}
        <h2 className="font-semibold pt-[42px] md:pt-[64px] mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Может быть интересно
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loadingRelated
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2A2830] h-[350px] rounded-[22px] animate-pulse"
                />
              ))
            : relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#1E1C24] rounded-[22px] overflow-hidden shadow-lg flex flex-col"
                >
                  {/* Image */}
                  <div className="w-full bg-white">
                    <Image
                      src={post.image || "/placeholder.png"}
                      alt={post.title}
                      width={320}
                      height={200}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 h-full md:p-[25px] flex justify-between flex-col">
                    <div>
                      <h2 className="text-[16px] leading-[138%] md:text-[20px] font-semibold mb-3 md:mb-4 line-clamp-2">
                        {post.title}
                      </h2>
                      <p
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className="text-[12px] line-clamp-3 font-normal leading-[138%] md:text-[16px] text-[#FFFFFFDB] mb-3 flex-1"
                      ></p>

                      <div className="flex items-center gap-[6px] text-gray-400 leading-[144%] text-[10px] mb-3">
                        <Image
                          alt="pencil"
                          width={10}
                          height={10}
                          src="/svg/pencil.svg"
                        />
                        <span>{post.created_at?.slice(0, 10)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => router.push(`/blog/${post.slug}`)}
                      className="w-full justify-center flex items-center cursor-pointer gap-[10px] btn-gradient text-[14px] transition-all duration-500 font-semibold md:text-[16px] text-white rounded-[14px] p-[10px] border border-[#FFA362]"
                    >
                      Читать полностью
                      <Image
                        src="/svg/btnicon.svg"
                        alt="btnicon"
                        width={28}
                        height={28}
                      />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
