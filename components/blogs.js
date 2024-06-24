import React from "react";

export default function Blog({ blogData: blogs }) {
  return (
    <section
      className="grid gap-6 md:gap-8 items-center justify-center"
      id="blogs"
    >
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl font-silkscreen">Blogs</h2>
        </div>
        <p>{`Here are some of my latest blog posts fetched directly from Dev Community:`}</p>
      </div>
      <div className="m-auto grid grid-cols-1 gap-10 justify-center md:grid-cols-2">
        {blogs.map((blog) => (
          <div
            className="grid gap-2 max-w-md border border-zinc-600 p-4 rounded-lg shadow-lg"
            key={blog.id}
          >
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {blog.title}
                </a>
              </h3>
            </div>

            <p>{blog.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-zinc-600 text-zinc-100 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* More Coming Soon section */}
        <div className="grid gap-2 max-w-md border border-dashed border-zinc-600 p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-zinc-400">
              More Coming Soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
