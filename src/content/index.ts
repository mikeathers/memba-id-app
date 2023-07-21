const appName = 'Memba'
export const newTenant: NewTenantContent = {
  heading: 'Get started',
  yourPlan: 'Your plan',
  perMonth: '/pm',
  freePricing: '£0.00',
  basicPricing: '£30.00',
  premiumPricing: '£50.00',
  change: 'Change',
  tenantAlreadyExistsError: 'A tenant with the details you have provided already exists.',
  genericError: 'Something has gone wrong, please try again later or get in touch.',
  form: {
    companyName: 'Company name:',
    companyNamePlaceholder: 'Enter your company name',
    firstName: 'First name:',
    firstNamePlaceholder: 'Enter your first name',
    lastName: 'Last name:',
    lastNamePlaceholder: 'Enter your last name',
    email: 'Email:',
    emailPlaceholder: 'Enter your email',
    password: 'Password:',
    passwordPlaceholder: 'Create a password',
    createAccount: 'Create account',
    validation: {
      passwordValidationMessage:
        '*Password should include lowercase, uppercase, digits and symbols.',
      passwordLengthMessage: '*Password should be at least 6 characters.',
      companyName: '*Company name is required',
      firstName: '*First name is required',
      lastName: '*Last name is required',
      emailAddress: '*Email address is required',
      emailAddressFormat: '*Email address is not valid',
      password: '*Password is required',
    },
  },
}

export const pricingPlans: PricingPlansContent = {
  heading: 'Pricing plans',
  freeTierTitleText: 'Free',
  freeTierTitleNumber: '#1',
  freeTierPricePerMonth: '£0.00/pm',
  freeTierNumberOfCustomer: 'Up to 20 customers',
  basicTierTitleText: 'Basic',
  basicTierTitleNumber: '#2',
  basicTierPricePerMonth: '£30.00/pm',
  basicTierNumberOfCustomer: 'Up to 200 customers',
  premiumTierTitleText: 'Premium',
  premiumTierTitleNumber: '#3',
  premiumTierPricePerMonth: '£50.00/pm',
  premiumTierNumberOfCustomer: 'Unlimited customers',
  transactionalCosts: 'We will charge you 1% per transaction you make within the app',
  getStarted: 'Get started',
  findOutMore: 'Find out more',
}

export const confirmAccount: ConfirmAccountContent = {
  heading: 'Check your inbox to log in',
  emailSentMessage:
    'To complete setup and log in, click the verification link in the email we’ve sent to {emailAddress}emailAddress{/emailAddress}',
  confirmationInstruction:
    'Check your email and follow the instructions to activate your account.',
  resendConfirmationEmail: 'Resend confirmation email',
  checkSpamFolder: 'Check your spam folder or ',
  sendAgain: 'Send again',
}

export const signUp: SignUpContent = {
  appName,
  heading: 'Sign up to continue',
  termsOfService:
    'By signing up, I accept the Memba Terms of Service and acknowledge the Privacy Policy.',
  login: 'Already have a memba account? Log in',
  userAlreadyExistsError: 'A user with the details you have provided already exists.',
  genericError: 'Something has gone wrong, please try again later or get in touch.',
  form: {
    fullName: 'Full name:',
    fullNamePlaceholder: 'Enter your full name',
    email: 'Email:',
    emailPlaceholder: 'Enter your email',
    password: 'Password:',
    passwordPlaceholder: 'Create a password',
    signUpCta: 'Sign up',
    validation: {
      passwordValidationMessage:
        '*Your password should include lowercase, uppercase, digits and symbols.',
      passwordLengthMessage: '*Your password should be at least 6 characters.',
      fullName: '*Please enter your full name',
      emailAddress: '*Please enter your email address',
      emailAddressFormat: '*Your email address is not valid',
      password: '*A password is required to set up your account',
    },
  },
}

export const login: LoginContent = {
  appName,
  heading: 'Log in to continue',
  signUp: 'Create an account',
  cantLogin: "Can't log in?",
  genericError: 'Something has gone wrong, please try again later or get in touch.',
  userNotFoundError: 'A user with the details provided has not been found.',
  incorrectUserNameOrPassword: 'The username or password provided was incorrect.',
  form: {
    email: 'Email:',
    emailPlaceholder: 'Enter your email',
    password: 'Password:',
    passwordPlaceholder: 'Enter your password',
    loginCta: 'Log in',
    validation: {
      emailAddress: '*Please enter your email address',
      emailAddressFormat: '*Your email address is not valid',
      password: '*Your password is required to log in to your account',
    },
  },
}

export const forgotPassword: ForgotPasswordContent = {
  heading: "Can't log in?",
  message: "We'll send a recovery link to:",
  sendLinkCta: 'Send recovery link',
  returnToLogin: 'Return to log in',
  form: {
    emailPlaceholder: 'Enter your email',
    validation: {
      emailAddress: '*Please enter your email address',
      emailAddressFormat: '*Your email address is not valid',
    },
  },
}

export const resetPassword: ResetPasswordContent = {
  heading: 'Choose a new password',
  submitCta: 'Continue',
  form: {
    passwordPlaceholder: 'Enter a new password',
    validation: {
      passwordValidationMessage:
        '*Your password should include lowercase, uppercase, digits and symbols.',
      passwordLengthMessage: '*Your password should be at least 6 characters.',
      password: '*A password is required to set up your account',
    },
  },
}

export const miscContent: MiscContent = {
  allRightsReserved: 'Copyright © 2023 All rights reserved',
}
