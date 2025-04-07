export default function Home() {
  return (
    <div>
      <div className="video-container my-8">
        <h2 className="text-2xl font-bold mb-4">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
} 