import Layout from '../components/adminDashboard/Layout'
import Footer from '../components/common/Footer'
import AdminNavbar from '../components/adminDashboard/AdminNavbar';


const AdminDashboard: React.FC = () => {
  return (
    <div>
    <AdminNavbar />
    <Layout />
    <Footer />
</div>
  );
};

export default AdminDashboard;
