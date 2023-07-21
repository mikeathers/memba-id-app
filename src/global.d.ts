import type {FormikErrors, FormikValues} from 'formik'

declare global {
  type AuthUser = {
    emailAddress: string
    familyName: string
    givenName: string
    isTenantAdmin?: boolean
    isMembaAdmin?: boolean
    tenantId?: string
  }

  type ErrorWithMessage = {
    message: string
  }

  interface NewUserDetails {
    emailAddress: string
    password: string
    firstName: string
    lastName: string
  }

  interface NewCustomerFormDetails extends FormikValues {
    emailAddress?: string
    password?: string
    firstName?: string
    lastName?: string
  }

  interface SignupFormDetails extends FormikValues {
    emailAddress: string
    password: string
    fullName: string
  }

  type ForgotPasswordFormDetails = Pick<SignupFormDetails, 'emailAddress'>
  type ResetPasswordFormDetails = Pick<SignupFormDetails, 'password'>

  interface LoginFormDetails extends FormikValues {
    emailAddress: string
    password: string
  }

  type FormikError =
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined

  type BadResponse = {
    message: string
  }
  type OKResponse = {
    statusCode: number
    body: {
      message: string
    }
  }

  type CognitoError = {
    name: string
    code: string
    message: string
  }

  type CognitoUserAttributes = {
    email: string
    family_name: string
    given_name: string
    picture?: string
    phone_number?: string
    address?: string
    'custom:isTenantAdmin'?: boolean
    'custom:isMembaAdmin'?: boolean
    'custom:tenantId'?: string
  }

  type RegisterTenantResponse = {
    statusCode: number
    body: {
      message: string
      result: {
        id: string
        firstName: string
        lastName: string
        emailAddress: string
        addressLineOne: string
        addressLineTwo: string
        doorNumber: string
        townCity: string
        postCode: string
        tenantId: string
        isTenantAdmin: boolean
      }
    }
  }

  /******************* ********************/
  /*************** Content ***************/
  /******************* ********************/

  type MiscContent = {
    allRightsReserved: string
  }
  type NewTenantContent = {
    heading: string
    yourPlan: string
    perMonth: string
    freePricing: string
    basicPricing: string
    premiumPricing: string
    change: string
    tenantAlreadyExistsError: string
    genericError: string
    form: {
      companyName: string
      companyNamePlaceholder: string
      firstName: string
      firstNamePlaceholder: string
      lastName: string
      lastNamePlaceholder: string
      email: string
      emailPlaceholder: string
      password: string
      passwordPlaceholder: string
      createAccount: string
      validation: {
        passwordValidationMessage: string
        passwordLengthMessage: string
        companyName: string
        emailAddress: string
        emailAddressFormat: string
        firstName: string
        lastName: string
        password: string
      }
    }
  }
  type PricingPlansContent = {
    heading: string
    freeTierTitleText: string
    freeTierTitleNumber: string
    freeTierPricePerMonth: string
    freeTierNumberOfCustomer: string
    basicTierTitleText: string
    basicTierTitleNumber: string
    basicTierPricePerMonth: string
    basicTierNumberOfCustomer: string
    premiumTierTitleText: string
    premiumTierTitleNumber: string
    premiumTierPricePerMonth: string
    premiumTierNumberOfCustomer: string
    transactionalCosts: string
    getStarted: string
    findOutMore: string
  }

  type ConfirmAccountContent = {
    heading: string
    emailSentMessage: string
    confirmationInstruction: string
    resendConfirmationEmail: string
    checkSpamFolder: string
    sendAgain: string
  }

  type SignUpContent = {
    appName: string
    heading: string
    termsOfService: string
    login: string
    userAlreadyExistsError: string
    fullNameRequireError: string
    genericError: string
    form: {
      fullName: string
      fullNamePlaceholder: string
      email: string
      emailPlaceholder: string
      password: string
      passwordPlaceholder: string
      signUpCta: string
      validation: {
        passwordValidationMessage: string
        passwordLengthMessage: string
        emailAddress: string
        emailAddressFormat: string
        fullName: string
        password: string
      }
    }
  }

  type LoginContent = {
    appName: string
    heading: string
    signUp: string
    cantLogin: string
    genericError: string
    userNotFoundError: string
    incorrectUserNameOrPassword: string
    form: {
      email: string
      emailPlaceholder: string
      password: string
      passwordPlaceholder: string
      loginCta: string
      validation: {
        emailAddress: string
        emailAddressFormat: string
        password: string
      }
    }
  }

  type ForgotPasswordContent = {
    heading: string
    message: string
    sendLinkCta: string
    returnToLogin: string
    form: {
      emailPlaceholder: string
      validation: {
        emailAddress: string
        emailAddressFormat: string
      }
    }
  }

  type ResetPasswordContent = {
    heading: string
    submitCta: string
    form: {
      passwordPlaceholder: string
      validation: {
        password: string
        passwordValidationMessage: string
        passwordLengthMessage: string
      }
    }
  }
}

export {}
