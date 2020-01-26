/**
 * Note:
 * In the video I install and import aws-amplify-vue.
 * We won't actually be using that package at all,
 * so feel free to uninstall and change your amplify plugin to the below.
 */
import Amplify from 'aws-amplify'
import awsconfig from '~/aws-exports'

Amplify.configure(awsconfig)
