import { getServerSession } from 'next-auth';
import DashboardComp from './DashboardComp';
import authOptions from '@/lib/auth';
import { redirect } from 'next/navigation';
import DashboardServerComp from './DashboardServerComp';

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }
  return (
    <div>
      <DashboardComp />
      {/* <DashboardServerComp /> */}
    </div>
  );
};

export default page;
