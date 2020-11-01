import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import { companyInfo } from '../../assets/config/settings'
import EnsureAuth from '../../components/utils/EnsureAuth'
import UserLayout from '../../components/partials/User/UserLayout'
import ChangePassword from '../../components/partials/User/ChangePassword'
import ChangeEmail from '../../components/partials/User/ChangeEmail'
import ChangePersonalInformation from '../../components/partials/User/ChangePersonalInformation'


const Dashboard = () => {
  var title = `Profile | ${companyInfo.name}`
  var description = 'Profile'


  return (
    <EnsureAuth roleIdRequired={[1, 2]}>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <UserLayout>
            <ChangePassword />
            <ChangeEmail />
            <ChangePersonalInformation />
          </UserLayout>
        </LayoutIndent>
      </Layout>
    </EnsureAuth >
  )
}


export default Dashboard
