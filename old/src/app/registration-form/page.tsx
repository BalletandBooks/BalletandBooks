// import { GoogleFormProvider, useGoogleForm, useShortAnswerInput } from 'react-google-forms-hooks'

// import form from './form.json'

// export default function ShortAnswerInput({ id }) {
//   const { register, label } = useShortAnswerInput(id)

//   return (
//     <div>
//       <p>{label}</p>
//       <input type='text' {...register()} />
//     </div>
//   )
// }

// // ***Last off: https://docs.google.com/forms/d/1qaZnRN1tJekJ4m1mIg8mRaDW2_CvJF93HxReztygiyU/edit
//  // https://blog.brendanscullion.com/frontend-only-contact-form-react-nextjs-google-forms 
//  //***

// const App = () => {
//   const methods = useGoogleForm({ form })
//   const onSubmit = async (data) => {
//     await methods.submitToGoogleForms(data)
//   }

//   return (
//     <GoogleFormProvider {...methods}>
//       <Form onSubmit={methods.handleSubmit(onSubmit)}>
//         <ShortAnswerInput id='1864908950' />
//         <button type='submit'>Submit</button>
//       </Form>
//     </GoogleFormProvider>
//   )
// }

// export default App