import CustomButton from "@/components/ui/custom-button/CustomButton";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <div className="flex flex-col mt-20 justify-center items-center mb-20">
        <div className="w-[470px] h-full text-center text-balance">
          <h1 className="text-4xl font-bold text-gray-900">
            Manage your expenses easily
          </h1>
          <p className="text-lg text-gray-500 mt-4">
            Control your income and expenses in one place, visualize your
            finances with graphs and make better decisions.
          </p>

          <div className="flex justify-center mt-5 gap-5">
          <CustomButton
              title="Sign In"
              className="text-lg bg-black text-white hover:bg-white hover:shadow-lg hover:text-black rounded-xl"
              href="/api/auth/login"
            />

            <CustomButton
              title="Sign Up"
              className="text-lg  bg-black text-white hover:bg-white hover:shadow-lg hover:text-black rounded-xl"
              href="/api/auth/login"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

153 / 5.0;
