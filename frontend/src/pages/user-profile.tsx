import { useUpdateMyUser } from '@/api/my-user-api';
import UserProfileForm from '@/forms/user-profile-form/user-profile';

function UserProfilePage() {
  const { updateUser, isLoading } = useUpdateMyUser();

  return (
    <UserProfileForm
      onSave={updateUser}
      isLoading={isLoading}
    />
  );
}

export default UserProfilePage;
