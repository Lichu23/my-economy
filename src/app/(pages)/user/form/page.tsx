import BackButton from "@/components/ui/BackButton";
import { getUser } from "@/lib/queries/getUser";
import UserForm from "./components/UserForm";
import CustomForm from "./components/CustomForm";

export default async function UserFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { userId } = await searchParams;

    if (userId) {
      const user = await getUser(parseInt(userId)); //transformamos el userId a number ya que por params es un string

      if (!user) {
        return (
          <>
            <h2>User ID #{userId} not found</h2>
            <BackButton title="Back" variant="default" />
          </>
        );
      }
      //put user form component 
      return <UserForm user={user}/>
      
    } else {
      //new user form component
      return <CustomForm/>
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
