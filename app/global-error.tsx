'use client' // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="flex flex-1 justify-center items-center ">
          <img src="/cg/undraw_Page_not_found_re_e9o6.png" alt="undraw_Page_not_found_re_e9o6.png" className="w-64" />
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  )
}