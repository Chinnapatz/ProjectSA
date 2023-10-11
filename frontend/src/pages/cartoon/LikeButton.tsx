// import React, { useState } from 'react';

// const LikeButton: React.FC = () => {
//   const [liked, setLiked] = useState(false);

//   const handleLikeClick = () => {
//     setLiked(!liked);
//   };

//   return (
//     <div>
//       <button onClick={handleLikeClick}>
//         {liked ?  : 'Like'}
//       </button>
//     </div>
//   );
// };

// export default LikeButton;







// import React, { useState } from 'react';
// import './style/LikeButton.css'; 

// const LikeButton: React.FC = () => {
//   const [liked, setLiked] = useState(false);

//   const handleLikeClick = () => {
//     setLiked(!liked);
//   };

//   return (
//     <div>
//       {
//       }
//       <button onClick={handleLikeClick} className={liked ? 'liked' : ''}>
//         {liked ? 'Liked' : 'Like'}
//       </button>
//     </div>
//   );
// };

// export default LikeButton;



import React, { useState } from 'react';
import './style/LikeButton.css'; // Import your CSS file with styles

const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div>
      {/* Apply the "liked" class when the button is liked */}
      <div onClick={handleLikeClick} className={liked ? 'liked' : 'like'}>
        {liked ? '💖 LIKED' : '🤍 LIKE'}
      </div>
    </div>
  );
};

export default LikeButton;