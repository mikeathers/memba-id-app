interface ConfigProps {
  STACK_PREFIX: string
  REGION: string
  AWS_ACCOUNT_ID_PROD: string
  AWS_ACCOUNT_ID_DEV: string
  PROD_URL: string
  DEV_URL: string
}

const CONFIG: ConfigProps = {
  STACK_PREFIX: 'IdApp',
  REGION: 'eu-west-2',
  AWS_ACCOUNT_ID_PROD: '635800996936',
  AWS_ACCOUNT_ID_DEV: '544312030237',
  PROD_URL: 'id.memba.co.uk',
  DEV_URL: 'id.dev.memba.co.uk',
}

export default CONFIG
