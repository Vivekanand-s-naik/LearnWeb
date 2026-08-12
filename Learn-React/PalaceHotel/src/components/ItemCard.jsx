import parse from 'html-react-parser'; 

export default function ItemCard({ post }) {
  const { postTitle, postImage, postContent } = post;

  return (
    <div className="w-80 overflow-hidden rounded-xl bg-white shadow-md border border-gray-100">
      {postImage && (
        <img src={postImage} alt={postTitle} className="h-48 w-full object-cover" />
      )}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold capitalize text-gray-800">
          {postTitle || 'Untitled Dish'}
        </h3>

        {/* Cleaner and safer parsed output */}
        <div className="text-sm leading-relaxed text-gray-600 prose prose-sm">
          {parse(postContent || '')}
        </div>
      </div>
    </div>
  );
}
