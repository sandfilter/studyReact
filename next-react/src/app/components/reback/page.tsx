// 在你的组件文件中引入 useRouter
import { useRouter } from 'next/router';

// 在组件中使用 useRouter
function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <p>Your component content goes here.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default BackButton;
