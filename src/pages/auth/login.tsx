import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { login } from '../../redux/actions/auth'
import { LockClosedIcon } from '@heroicons/react/solid'
import Loader, { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector((state: any) => state.Auth.isAuthenticated);
  const loading = useSelector((state: any) => state.Auth.loading);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {
    email,
    password,
  } = formData;
  const onChange = (e: React.FormEvent<HTMLInputElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(login(email, password));
  };
  if (typeof window !== 'undefined' && isAuthenticated)
    router.push('/');

  return (
    <Layout title='Ingresar | ATON' content="Iniciar sesion en aton">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type='text'
                  onChange={onChange}
                  value={email}
                  placeholder="Email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={onChange}
                  value={password}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              {
                loading ? (<button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Oval
                    color='#00bfff'
                    width={50}
                    height={50}
                  />
                </button>) : (
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Sign in
                  </button>
                )
              }

            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login