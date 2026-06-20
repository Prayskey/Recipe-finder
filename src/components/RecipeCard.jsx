export default function RecipeCard({ imageSrc, title, about, rating }) {
  return (
    <div className="relative isolate h-96 cursor-pointer overflow-hidden rounded-3xl border-4 border-white bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* 1. Base Image - Hardware accelerated using transform to stay ultra-sharp */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 h-full w-full translate-z-0 transform object-cover object-center will-change-transform"
      />

      {/* 2. Frosted Blur Container - Constrained completely to the bottom 40% */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 overflow-hidden rounded-b-2xl">
        {/* Backdrop blur layer */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

        {/* Soft dark gradient layer for readability contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* 3. Text & Content Layer */}
      <div className="absolute right-0 bottom-0 left-0 z-20 space-y-2 px-4 pb-4 text-white">
        <p className="text-md leading-tight font-bold drop-shadow-sm">
          {title}
        </p>
        <p className="line-clamp-2 text-xs text-gray-100">{about}</p>

        <div className="flex items-center space-x-2 pt-0.5">
          <p className="text-xs font-bold text-amber-400">
            ★ {rating ? rating.toFixed(1) : "0.0"}
          </p>
          <p className="text-[10px] font-medium text-gray-300">
            (Verified Recipe)
          </p>
        </div>

        <button className="mt-1 w-full cursor-pointer rounded-full bg-white py-1.5 text-xs font-semibold text-black transition-colors hover:bg-gray-100">
          View
        </button>
      </div>
    </div>
  );
}
