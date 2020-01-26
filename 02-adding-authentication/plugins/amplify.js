import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from '~/aws-exports'

Amplify.configure(awsconfig)

Vue.use(AmplifyPlugin, AmplifyModules)
