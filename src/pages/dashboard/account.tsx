import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout/LayoutDashboard'
import ProfileInfo from '../../components/profile/ProfileInfo'
import UpdateInfo from '../../components/profile/UpdateInfo';

const account = () => {
  const profile = useSelector((state: any) => state.Profile.profile)
  const user = useSelector((state: any) => state.Auth.user)

  const [loading, setLoading] = useState(false)
  const [edit, setEdit] = useState(false)
  const ViewInfo = () => {
    setEdit(!edit)
  }

  

  return (
    <Layout title='Perfil | ATON' content='perfil de usuario de ATON'>
      <div className="lg:m-6 m-3  ">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="font-bold tracking-wider uppercase dark:text-violet-400 ">Tus datos estan seguros</span>
          <h2 className="text-4xl font-bold lg:text-3xl dark:text-indigo-500">Agrega o actualiza tu información</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {
            profile && profile !== undefined && profile !== null && user && user !== undefined && user !== null && <>

              {edit ?
                <UpdateInfo
                  user={user}
                  profile={profile}
                  setLoading={setLoading}
                  loading={loading}
                  ViewInfo={ViewInfo}
                /> :
                <ProfileInfo
                  profile={profile}
                  user={user}
                  ViewInfo={ViewInfo}
                />
              }

            </>
          }




        </div>
      </div>

    </Layout>
  )
}

export default account