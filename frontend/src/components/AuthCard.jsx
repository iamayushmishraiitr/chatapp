const AuthCard = ({ title, subtitle, children }) => {
  return (
    <div className="flex min-h-screen  w-full items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden ">
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-300 mb-6">
          <span className="text-gray-400">{title}</span>
          <span className="text-blue-400"> {subtitle}</span>
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
