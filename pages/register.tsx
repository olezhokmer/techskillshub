import Layout from '../layouts/Main';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { UserResponse } from 'types';
import { setUserLogged } from 'store/reducers/user';
import { registerUser } from 'utils/server';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const loginUser = (userResponse: UserResponse) => {
    dispatch(setUserLogged(userResponse));
  }
  const onSubmit = async (data: any) => {
    const { email, password, firstName, lastName } = data;
    let res;
  
    try {
      res = await registerUser(email, firstName, lastName, password);
      // @ts-ignore:next-line
      const errorMessage = res?.errorMessage;

      if (errorMessage) {
        return toast.error(errorMessage);
      }
    } catch (error) {
      // @ts-ignore:next-line
      return toast.error(error?.errorMessage);
    }
    loginUser(res);
    router.push('/products');
  };

  return (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a><i className="icon-left"></i> Back to store</a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">Create an account and discover the benefits</h2>
          <p className="form-block__description">Unlock your potential and embark on a journey of endless learning. Dive into a world of knowledge with our IT courses, tailored just for you. Get started today!</p>
          
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input-row">
              <input 
                className="form__input" 
                placeholder="Last Name" type="text"
                name="firstName"
                ref={register({ required: true })}
              />
              {errors.password && errors.password.type === 'required' && 
                <p className="message message--error">This field is required</p>
              }
            </div>
            
            <div className="form__input-row">
              <input 
                className="form__input" 
                placeholder="Last Name" type="text"
                name="lastName"
                ref={register({ required: true })}
              />
              {errors.password && errors.password.type === 'required' && 
                <p className="message message--error">This field is required</p>
              }
            </div>
            
            <div className="form__input-row">
              <input 
                className="form__input" 
                placeholder="email" 
                type="text" 
                name="email"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />

              {errors.email && errors.email.type === 'required' && 
                <p className="message message--error">This field is required</p>
              }

              {errors.email && errors.email.type === 'pattern' && 
                <p className="message message--error">Please write a valid email</p>
              }
            </div>
            
            <div className="form__input-row">
              <input 
                className="form__input" 
                type="password" 
                placeholder="Password" 
                name="password"
                ref={register({ required: true })}
              />
              {errors.password && errors.password.type === 'required' && 
                <p className="message message--error">This field is required</p>
              }
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>I agree to the TechSkillsHub Terms of Service and Privacy Policy</p>
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign up</button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>);
}
  
export default RegisterPage
  