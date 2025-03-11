import CustomButton from "@/components/ui/custom-button/CustomButton";
import Image from "next/image";

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

          <div className="flex justify-center mt-5 gap-5 mb-5">
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

        <div className="w-full mt-5">
          <div className="flex gap-4 px-10">
            <Image
              src="/steps/first-step.png"
              alt="tutorial steps"
              width={900}
              height={900}
              className=" w-1/3 h-auto object-contain"
            />
            <Image
              src="/steps/second-step.png"
              alt="tutorial steps"
              width={900}
              height={900}
              className="w-1/3 h-auto object-contain"
            />
            <Image
              src="/steps/third-step.png"
              alt="tutorial steps"
              width={900}
              height={900}
              className="w-1/3 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

153 / 5.0;
