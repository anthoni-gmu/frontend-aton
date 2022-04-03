import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/layout/LayoutDashboard'
import ProfileInfo from '../../components/profile/ProfileInfo'
import UpdateInfo from '../../components/profile/UpdateInfo'
import { update_account } from '../../redux/actions/profile'

const account = () => {
  const profile = useSelector((state: any) => state.Profile.profile)
  const user = useSelector((state: any) => state.Auth.user)
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false)
  const [edit, setEdit] = useState(false)
  const ViewInfo = () => {
    setEdit(!edit)
  }

  const [formData, setFormData] = useState({
    enterprice: profile && profile.enterprice,
    photo: profile && profile.photo,
    city: profile && profile.city,
    address_line_1: profile && profile.address_line_1,
    address_line_2: profile && profile.address_line_2,
    district: profile && profile.district,
    zipcode: profile && profile.zipcode,
    phone: profile && profile.phone,
  });

  const {
    enterprice,
    photo,
    city,
    address_line_1,
    address_line_2,
    district,
    zipcode,
    phone
  } = formData;
  const onChange = (e: React.FormEvent<HTMLInputElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true)
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(update_account(
        enterprice,
        photo,
        city,
        address_line_1,
        address_line_2,
        district,
        zipcode,
        phone
      ))

    }
    setLoading(false)
    ViewInfo()
    window.scrollTo(0, 0);
  };

  return (
    <Layout title='Perfil | ATON' content='perfil de usuario de ATON'>
      <div className="m-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {
            profile && profile !== undefined && profile !== null && user && user !== undefined && user !== null && <>

              {edit ?
                <UpdateInfo
                  onSubmit={onSubmit}
                  user={user}
                  onChange={onChange}
                  profile={profile}
                  enterprice={enterprice}
                  photo={photo}
                  city={city}
                  address_line_1={address_line_1}
                  address_line_2={address_line_2}
                  district={district}
                  zipcode={zipcode}
                  phone={phone}
                  loading={loading}
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