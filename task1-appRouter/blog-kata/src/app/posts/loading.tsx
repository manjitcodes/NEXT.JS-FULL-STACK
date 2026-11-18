export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner" />
      <h2>Loading posts...</h2>
      <p>Please wait while we fetch your posts.</p>
    </div>
  );
}