export default function SkipLoginButton({ skipLogin }) {
  const handleSkipLoginClick = () => {
    skipLogin();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSkipLoginClick}
      >
        천천히 둘러볼래요!
      </button>
    </div>
  );
}
