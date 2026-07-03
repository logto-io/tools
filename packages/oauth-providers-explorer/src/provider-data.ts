/* eslint-disable max-lines */
import AdobeIcon from './assets/providers/adobe.svg?react';
import AmazonIcon from './assets/providers/amazon.svg?react';
import AppleIcon from './assets/providers/apple.svg?react';
import BitbucketIcon from './assets/providers/bitbucket.svg?react';
import BoxIcon from './assets/providers/box.svg?react';
import DiscordIcon from './assets/providers/discord.svg?react';
import DoximityIcon from './assets/providers/doximity.svg?react';
import DropboxIcon from './assets/providers/dropbox.svg?react';
import FacebookIcon from './assets/providers/facebook.svg?react';
import FeishuIcon from './assets/providers/feishu.svg?react';
import FigmaIcon from './assets/providers/figma.svg?react';
import GithubIcon from './assets/providers/github.svg?react';
import GitlabIcon from './assets/providers/gitlab.svg?react';
import GoogleIcon from './assets/providers/google.svg?react';
import HubSpotIcon from './assets/providers/hubspot.svg?react';
import HuggingFaceIcon from './assets/providers/huggingface.svg?react';
import KakaoIcon from './assets/providers/kakao.svg?react';
import KookIcon from './assets/providers/kook.svg?react';
import LineIcon from './assets/providers/line.svg?react';
import LinkedInIcon from './assets/providers/linkedin.svg?react';
import NaverIcon from './assets/providers/naver.svg?react';
import NotionIcon from './assets/providers/notion.svg?react';
import PatreonIcon from './assets/providers/patreon.svg?react';
import PayPalIcon from './assets/providers/paypal.svg?react';
import PinterestIcon from './assets/providers/pinterest.svg?react';
import QQIcon from './assets/providers/qq.svg?react';
import SalesforceIcon from './assets/providers/salesforce.svg?react';
import ShopifyIcon from './assets/providers/shopify.svg?react';
import SlackIcon from './assets/providers/slack.svg?react';
import SpotifyIcon from './assets/providers/spotify.svg?react';
import SteamIcon from './assets/providers/steam.svg?react';
import StripeIcon from './assets/providers/stripe.svg?react';
import TiktokIcon from './assets/providers/tiktok.svg?react';
import TwitchIcon from './assets/providers/twitch.svg?react';
import VimeoIcon from './assets/providers/vimeo.svg?react';
import WeChatIcon from './assets/providers/wechat.svg?react';
import XIcon from './assets/providers/x.svg?react';
import XiaomiIcon from './assets/providers/xiaomi.svg?react';
import ZaloIcon from './assets/providers/zalo.svg?react';
import ZuoraIcon from './assets/providers/zuora.svg?react';
import { type ProviderData } from './types';

const providers: ProviderData[] = [
  {
    id: 'adobe',
    name: 'Adobe',
    Icon: AdobeIcon,
    endpoints: {
      authorizationEndpoint: 'https://ims-na1.adobelogin.com/ims/authorize',
      tokenEndpoint: 'https://ims-na1.adobelogin.com/ims/token',
      userinfoEndpoint: 'https://ims-na1.adobelogin.com/ims/userinfo/v2',
    },
    documentations: [
      {
        title: 'Adobe OAuth',
        url: 'https://developer.adobe.com/developer-console/docs/guides/authentication/OAuth/',
      },
      {
        title: 'Adobe IMS API',
        url: 'https://developer.adobe.com/developer-console/docs/guides/ims/ims-api/',
      },
    ],
  },
  {
    id: 'amazon',
    name: 'Amazon',
    Icon: AmazonIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.amazon.com/ap/oa',
      tokenEndpoint: 'https://api.amazon.com/auth/o2/token',
      userinfoEndpoint: 'https://api.amazon.com/user/profile',
    },
    documentations: [
      {
        title: 'Amazon Developer Console: Login with Amazon',
        url: 'https://developer.amazon.com/loginwithamazon/console/site/lwa/overview.html',
      },
    ],
  },
  {
    id: 'apple',
    name: 'Apple',
    Icon: AppleIcon,
    oidcSupported: true,
    endpoints: {
      oidcDiscoveryEndpoint: 'https://account.apple.com/.well-known/openid-configuration',
      issuer: 'https://appleid.apple.com',
      authorizationEndpoint: 'https://appleid.apple.com/auth/authorize',
      tokenEndpoint: 'https://appleid.apple.com/auth/token',
      revocationEndpoint: 'https://appleid.apple.com/auth/revoke',
      jwksUri: 'https://appleid.apple.com/auth/keys',
    },
    documentations: [
      {
        title: 'Sign in with Apple',
        url: 'https://developer.apple.com/documentation/signinwithapple',
      },
      {
        title: 'Sign in with Apple missing email claim in the (JWT) identityToken',
        url: 'https://developer.apple.com/forums/thread/132223',
      },
    ],
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    Icon: BitbucketIcon,
    endpoints: {
      authorizationEndpoint: 'https://bitbucket.org/site/oauth2/authorize',
      tokenEndpoint: 'https://bitbucket.org/site/oauth2/access_token',
      userinfoEndpoint: 'https://api.bitbucket.org/2.0/user',
    },
    documentations: [
      {
        title: 'Bitbucket OAuth 2.0',
        url: 'https://developer.atlassian.com/cloud/bitbucket/oauth-2/',
      },
      {
        title: 'Bitbucket API User',
        url: 'https://developer.atlassian.com/cloud/bitbucket/rest/api-group-users/#api-users-get',
      },
    ],
  },
  {
    id: 'box',
    name: 'Box',
    Icon: BoxIcon,
    endpoints: {
      authorizationEndpoint: 'https://account.box.com/api/oauth2/authorize',
      tokenEndpoint: 'https://api.box.com/oauth2/token',
      userinfoEndpoint: 'https://api.box.com/2.0/users/me',
    },
    documentations: [
      {
        title: 'Box OAuth 2.0',
        url: 'https://developer.box.com/guides/authentication/oauth2/',
      },
      {
        title: 'Box API Reference',
        url: 'https://developer.box.com/reference/',
      },
    ],
  },
  {
    id: 'discord',
    name: 'Discord',
    Icon: DiscordIcon,
    endpoints: {
      authorizationEndpoint: 'https://discord.com/oauth2/authorize',
      tokenEndpoint: 'https://discord.com/api/oauth2/token',
      revocationEndpoint: 'https://discord.com/api/oauth2/token/revoke',
    },
    documentations: [
      {
        title: 'Discord OAuth2 URLs',
        url: 'https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls',
      },
      {
        title: 'Discord OAuth2 Scopes',
        url: 'https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes',
      },
      {
        title: 'Discord API Reference',
        url: 'https://discord.com/developers/docs/reference#api-reference',
      },
    ],
  },
  {
    id: 'doximity',
    name: 'Doximity',
    Icon: DoximityIcon,
    endpoints: {
      authorizationEndpoint: 'https://auth.doximity.com/oauth/authorize',
      tokenEndpoint: 'https://auth.doximity.com/oauth/token',
      userinfoEndpoint: 'https://auth.doximity.com/oauth/userinfo',
    },
    documentations: [
      {
        title: 'Doximity OAuth',
        url: 'https://www.doximity.com/developers/documentation',
      },
    ],
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    Icon: DropboxIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.dropbox.com/oauth2/authorize',
      tokenEndpoint: 'https://api.dropboxapi.com/oauth2/token',
      userinfoEndpoint: 'https://api.dropboxapi.com/2/users/get_current_account',
    },
    documentations: [
      {
        title: 'Dropbox OAuth Guide',
        url: 'https://developers.dropbox.com/oauth-guide',
      },
      {
        title: 'Dropbox API Reference',
        url: 'https://www.dropbox.com/developers/documentation/http/documentation',
      },
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    Icon: FacebookIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.facebook.com/v22.0/dialog/oauth',
      tokenEndpoint: 'https://graph.facebook.com/v22.0/oauth/access_token',
      userinfoEndpoint: 'https://graph.facebook.com/v22.0/me',
    },
    documentations: [
      {
        title: 'Manually Build a Login Flow',
        url: 'https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow',
      },
      {
        title: 'Permissions Reference for Meta Technologies APIs',
        url: 'https://developers.facebook.com/docs/permissions',
      },
    ],
  },
  {
    id: 'feishu',
    name: 'Feishu',
    Icon: FeishuIcon,
    endpoints: {
      authorizationEndpoint: 'https://open.feishu.cn/open-apis/authen/v1/index',
      tokenEndpoint: 'https://open.feishu.cn/open-apis/authen/v2/oauth/token',
      userinfoEndpoint: 'https://open.feishu.cn/open-apis/authen/v1/user_info',
    },
    documentations: [
      {
        title: 'Feishu Open Platform - Get User Access Token',
        url: 'https://open.feishu.cn/document/authentication-management/access-token/get-user-access-token',
      },
      {
        title: 'Feishu Get User Information',
        url: 'https://open.feishu.cn/document/server-docs/authentication-management/login-state-management/get',
      },
    ],
  },
  {
    id: 'figma',
    name: 'Figma',
    Icon: FigmaIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.figma.com/oauth',
      tokenEndpoint: 'https://www.figma.com/api/v1/oauth/token',
    },
    documentations: [
      {
        title: 'Figma OAuth',
        url: 'https://www.figma.com/developers/api#auth-oauth2',
      },
      {
        title: 'Figma REST API',
        url: 'https://www.figma.com/developers/api',
      },
    ],
  },
  {
    id: 'github',
    name: 'GitHub',
    Icon: GithubIcon,
    endpoints: {
      authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      tokenEndpoint: 'https://github.com/login/oauth/access_token',
      userinfoEndpoint: 'https://api.github.com/user',
    },
    documentations: [
      {
        title: 'Building OAuth apps',
        url: 'https://docs.github.com/en/apps/oauth-apps/building-oauth-apps',
      },
      {
        title: 'Authorizing OAuth apps',
        url: 'https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps',
      },
      {
        title: 'Scopes for OAuth apps',
        url: 'https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps',
      },
      {
        title: 'List email addresses for the authenticated user',
        url: 'https://docs.github.com/en/rest/users/emails#list-email-addresses-for-the-authenticated-user',
      },
    ],
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    Icon: GitlabIcon,
    oidcSupported: true,
    endpoints: {
      oidcDiscoveryEndpoint: 'https://gitlab.com/.well-known/openid-configuration',
      issuer: 'https://gitlab.com',
      authorizationEndpoint: 'https://gitlab.com/oauth/authorize',
      tokenEndpoint: 'https://gitlab.com/oauth/token',
      revocationEndpoint: 'https://gitlab.com/oauth/revoke',
      introspectionEndpoint: 'https://gitlab.com/oauth/introspect',
      userinfoEndpoint: 'https://gitlab.com/oauth/userinfo',
      jwksUri: 'https://gitlab.com/oauth/discovery/keys',
    },
    documentations: [
      {
        title: 'GitLab as OpenID Connect identity provider',
        url: 'https://docs.gitlab.com/integration/openid_connect_provider/',
      },
      {
        title: 'GitLab OAuth2 supported scopes',
        url: 'https://docs.gitlab.com/integration/oauth_provider/#view-all-authorized-applications',
      },
    ],
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    Icon: HubSpotIcon,
    endpoints: {
      authorizationEndpoint: 'https://app.hubspot.com/oauth/authorize',
      tokenEndpoint: 'https://api.hubapi.com/oauth/v1/token',
      userinfoEndpoint: 'https://api.hubapi.com/oauth/v1/access-tokens/{token}',
      // Use /oauth/v1/access-tokens/{token} to get information about an access token, including the user and Hub ID
    },
    documentations: [
      {
        title: 'HubSpot OAuth',
        url: 'https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/oauth/oauth-quickstart-guide',
      },
      {
        title: 'HubSpot API Reference',
        url: 'https://developers.hubspot.com/docs/api-reference/auth-oauth-v1/guide',
      },
    ],
  },
  {
    id: 'google',
    name: 'Google',
    Icon: GoogleIcon,
    oidcSupported: true,
    endpoints: {
      oidcDiscoveryEndpoint: 'https://accounts.google.com/.well-known/openid-configuration',
      issuer: 'https://accounts.google.com',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenEndpoint: 'https://oauth2.googleapis.com/token',
      userinfoEndpoint: 'https://openidconnect.googleapis.com/v1/userinfo',
      revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
      jwksUri: 'https://www.googleapis.com/oauth2/v3/certs',
    },
    documentations: [
      {
        title: 'Google Identity - OpenID Connect',
        url: 'https://developers.google.com/identity/openid-connect/openid-connect',
      },
    ],
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    Icon: HuggingFaceIcon,
    oidcSupported: true,
    endpoints: {
      oidcDiscoveryEndpoint: 'https://huggingface.co/.well-known/openid-configuration',
      issuer: 'https://huggingface.co',
      authorizationEndpoint: 'https://huggingface.co/oauth/authorize',
      tokenEndpoint: 'https://huggingface.co/oauth/token',
      userinfoEndpoint: 'https://huggingface.co/oauth/userinfo',
      jwksUri: 'https://huggingface.co/oauth/jwks',
    },
    documentations: [
      {
        title: 'Sign in with Hugging Face',
        url: 'https://huggingface.co/docs/hub/en/oauth',
      },
      {
        title: 'Hugging Face OAuth2 Supported Scopes',
        url: 'https://huggingface.co/docs/hub/en/oauth#currently-supported-scopes',
      },
    ],
  },
  {
    id: 'kakao',
    name: 'Kakao',
    Icon: KakaoIcon,
    oidcSupported: true,
    endpoints: {
      oidcDiscoveryEndpoint: 'https://kauth.kakao.com/.well-known/openid-configuration',
      issuer: 'https://kauth.kakao.com',
      authorizationEndpoint: 'https://kauth.kakao.com/oauth/authorize',
      tokenEndpoint: 'https://kauth.kakao.com/oauth/token',
      userinfoEndpoint: 'https://kapi.kakao.com/v1/oidc/userinfo',
      jwksUri: 'https://kauth.kakao.com/.well-known/jwks.json',
    },
    documentations: [
      {
        title: 'Kakao Login',
        url: 'https://developers.kakao.com/docs/latest/en/kakaologin/common',
      },
      {
        title: 'OIDC: Retrieve Discovery document',
        url: 'https://developers.kakao.com/docs/latest/en/kakaologin/rest-api#oidc-discovery',
      },
    ],
  },
  {
    id: 'kook',
    name: 'KOOK',
    Icon: KookIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.kookapp.cn/app/oauth2/authorize',
      tokenEndpoint: 'https://www.kookapp.cn/api/oauth2/token',
      userinfoEndpoint: 'https://www.kookapp.cn/api/v3/user/me',
    },
    documentations: [
      {
        title: 'KOOK OAuth2.0 Developer Guide',
        url: 'https://developer.kookapp.cn/doc/oauth2',
      },
      {
        title: 'KOOK OAuth2.0 Supported Scopes',
        url: 'https://developer.kookapp.cn/doc/oauth2#%E7%9B%AE%E5%89%8D%E6%94%AF%E6%8C%81%E7%9A%84%20Scope%20%E5%8F%8A%E5%AF%B9%E5%BA%94%E8%83%BD%E5%8A%9B%E8%8C%83%E5%9B%B4',
      },
    ],
  },
  {
    id: 'line',
    name: 'LINE',
    Icon: LineIcon,
    oidcSupported: true,
    endpoints: {
      oidcDiscoveryEndpoint: 'https://access.line.me/.well-known/openid-configuration',
      issuer: 'https://access.line.me',
      authorizationEndpoint: 'https://access.line.me/oauth2/v2.1/authorize',
      tokenEndpoint: 'https://api.line.me/oauth2/v2.1/token',
      userinfoEndpoint: 'https://api.line.me/oauth2/v2.1/userinfo',
      jwksUri: 'https://api.line.me/oauth2/v2.1/certs',
      revocationEndpoint: 'https://api.line.me/oauth2/v2.1/revoke',
    },
    documentations: [
      {
        title: 'LINE Developers - LINE Login overview',
        url: 'https://developers.line.biz/en/docs/line-login/overview/',
      },
    ],
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    Icon: LinkedInIcon,
    oidcSupported: true,
    endpoints: {
      oidcDiscoveryEndpoint: 'https://www.linkedin.com/oauth/.well-known/openid-configuration',
      issuer: 'https://www.linkedin.com/oauth',
      authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
      tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
      userinfoEndpoint: 'https://api.linkedin.com/v2/userinfo',
      jwksUri: 'https://www.linkedin.com/oauth/openid/jwks',
    },
    documentations: [
      {
        title: 'Sign In with LinkedIn using OpenID Connect',
        url: 'https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2',
      },
    ],
  },
  {
    id: 'naver',
    name: 'Naver',
    Icon: NaverIcon,
    endpoints: {
      authorizationEndpoint: 'https://nid.naver.com/oauth2.0/authorize',
      tokenEndpoint: 'https://nid.naver.com/oauth2.0/token',
      userinfoEndpoint: 'https://openapi.naver.com/v1/nid/me',
    },
    documentations: [
      {
        title: 'Naver Login API Specification',
        url: 'https://developers.naver.com/docs/login/api/api.md',
      },
    ],
  },
  {
    id: 'notion',
    name: 'Notion',
    Icon: NotionIcon,
    endpoints: {
      authorizationEndpoint: 'https://api.notion.com/v1/oauth/authorize',
      tokenEndpoint: 'https://api.notion.com/v1/oauth/token',
      userinfoEndpoint: 'https://api.notion.com/v1/users/me',
      // Notion does not have a standard userinfo endpoint. You need to call /v1/users/me using the access token.
    },
    documentations: [
      {
        title: 'Notion OAuth',
        url: 'https://developers.notion.com/docs/authorization',
      },
      {
        title: 'Notion API Reference',
        url: 'https://developers.notion.com/reference/intro',
      },
    ],
  },
  {
    id: 'patreon',
    name: 'Patreon',
    Icon: PatreonIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.patreon.com/oauth2/authorize',
      tokenEndpoint: 'https://www.patreon.com/api/oauth2/token',
      userinfoEndpoint: 'https://www.patreon.com/api/oauth2/api/current_user',
    },
    documentations: [
      {
        title: 'Patreon OAuth',
        url: 'https://docs.patreon.com/#clients-and-api-keys',
      },
      {
        title: 'Patreon API Scopes',
        url: 'https://docs.patreon.com/#note-to-those-with-v1-tokens',
      },
    ],
  },
  {
    id: 'paypal',
    name: 'PayPal',
    Icon: PayPalIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.paypal.com/signin/authorize',
      tokenEndpoint: 'https://api.paypal.com/v1/oauth2/token',
      userinfoEndpoint: 'https://api-m.sandbox.paypal.com/v1/identity/openidconnect/userinfo',
    },
    documentations: [
      {
        title: 'PayPal OAuth 2.0',
        url: 'https://developer.paypal.com/api/rest/authentication/',
      },
      {
        title: 'PayPal Identity API',
        url: 'https://developer.paypal.com/docs/api/identity/v1/',
      },
    ],
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    Icon: PinterestIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.pinterest.com/oauth/',
      tokenEndpoint: 'https://api.pinterest.com/v5/oauth/token',
      userinfoEndpoint: 'https://api.pinterest.com/v5/user_account',
    },
    documentations: [
      {
        title: 'Pinterest OAuth',
        url: 'https://developers.pinterest.com/docs/api/v5/#operation/oauthToken',
      },
      {
        title: 'Pinterest API Reference',
        url: 'https://developers.pinterest.com/docs/api/v5/',
      },
    ],
  },
  {
    id: 'qq',
    name: 'QQ',
    Icon: QQIcon,
    endpoints: {
      authorizationEndpoint: 'https://graph.qq.com/oauth2.0/authorize',
      tokenEndpoint: 'https://graph.qq.com/oauth2.0/token',
      userinfoEndpoint: 'https://graph.qq.com/user/get_user_info',
    },
    documentations: [
      {
        title: 'QQ Connect - Website Application Integration',
        url: 'https://wiki.connect.qq.com/%E7%BD%91%E7%AB%99%E5%BA%94%E7%94%A8%E6%8E%A5%E5%85%A5',
      },
    ],
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    Icon: SalesforceIcon,
    endpoints: {
      authorizationEndpoint: 'https://login.salesforce.com/services/oauth2/authorize',
      tokenEndpoint: 'https://login.salesforce.com/services/oauth2/token',
      userinfoEndpoint: 'https://login.salesforce.com/services/oauth2/userinfo',
    },
    documentations: [
      {
        title: 'Salesforce OAuth 2.0',
        url: 'https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_authenticate.htm&type=5',
      },
      {
        title: 'Salesforce REST API',
        url: 'https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm',
      },
    ],
  },
  {
    id: 'shopify',
    name: 'Shopify',
    Icon: ShopifyIcon,
    endpoints: {
      authorizationEndpoint: 'https://{shop}.myshopify.com/admin/oauth/authorize',
      tokenEndpoint: 'https://{shop}.myshopify.com/admin/oauth/access_token',
    },
    documentations: [
      {
        title: 'Shopify OAuth',
        url: 'https://shopify.dev/docs/apps/auth/oauth',
      },
      {
        title: 'Shopify Admin API',
        url: 'https://shopify.dev/docs/api/admin-rest',
      },
    ],
  },
  {
    id: 'slack',
    name: 'Slack',
    Icon: SlackIcon,
    oidcSupported: true,
    endpoints: {
      oidcDiscoveryEndpoint: 'https://slack.com/.well-known/openid-configuration',
      issuer: 'https://slack.com',
      authorizationEndpoint: 'https://slack.com/openid/connect/authorize',
      tokenEndpoint: 'https://slack.com/api/openid.connect.token',
      userinfoEndpoint: 'https://slack.com/api/openid.connect.userInfo',
      jwksUri: 'https://slack.com/openid/connect/keys',
    },
    documentations: [
      {
        title: 'Sign in with Slack setup',
        url: 'https://api.slack.com/authentication/sign-in-with-slack',
      },
    ],
  },
  {
    id: 'spotify',
    name: 'Spotify',
    Icon: SpotifyIcon,
    endpoints: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
      userinfoEndpoint: 'https://api.spotify.com/v1/me',
    },
    documentations: [
      {
        title: 'Spotify Authorization Guide',
        url: 'https://developer.spotify.com/documentation/web-api/tutorials/code-flow',
      },
      {
        title: 'Spotify Web API Reference',
        url: 'https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile',
      },
    ],
  },
  {
    id: 'steam',
    name: 'Steam',
    Icon: SteamIcon,
    endpoints: {
      authorizationEndpoint: 'https://steamcommunity.com/openid/login',
      // Steam uses OpenID 1.0, non-standard OAuth2, and retains endpoints for easy reference
    },
    documentations: [
      {
        title: 'Steam OpenID Documentation',
        url: 'https://partner.steamgames.com/doc/features/auth',
      },
      {
        title: 'Steam OpenID (community wiki)',
        url: 'https://steamcommunity.com/dev',
      },
    ],
  },
  {
    id: 'stripe',
    name: 'Stripe',
    Icon: StripeIcon,
    endpoints: {
      authorizationEndpoint: 'https://connect.stripe.com/oauth/authorize',
      tokenEndpoint: 'https://connect.stripe.com/oauth/token',
      // Stripe does not have a standard userinfo endpoint and needs to call /v1/account using the access token
    },
    documentations: [
      {
        title: 'Stripe OAuth',
        url: 'https://stripe.com/docs/connect/oauth-reference',
      },
      {
        title: 'Stripe API Reference',
        url: 'https://stripe.com/docs/api',
      },
    ],
  },
  {
    id: 'tiktok',
    name: 'Tiktok',
    Icon: TiktokIcon,
    endpoints: {
      authorizationEndpoint: 'https://www.tiktok.com/v2/auth/authorize/',
      tokenEndpoint: 'https://open-api.tiktok.com/oauth/access_token/',
      userinfoEndpoint: 'https://open-api.tiktok.com/user/info/',
    },
    documentations: [
      {
        title: 'TikTok OAuth 2.0',
        url: 'https://developers.tiktok.com/doc/login-kit-web/',
      },
      {
        title: 'TikTok Get User Profile Information',
        url: 'https://developers.tiktok.com/doc/tiktok-api-v1-user-info',
      },
    ],
  },
  {
    id: 'twitch',
    name: 'Twitch',
    Icon: TwitchIcon,
    endpoints: {
      authorizationEndpoint: 'https://id.twitch.tv/oauth2/authorize',
      tokenEndpoint: 'https://id.twitch.tv/oauth2/token',
      userinfoEndpoint: 'https://api.twitch.tv/helix/users',
    },
    documentations: [
      {
        title: 'Twitch OAuth Docs',
        url: 'https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/',
      },
      {
        title: 'Twitch Developer Console',
        url: 'https://dev.twitch.tv/console/apps',
      },
      {
        title: 'Twitch Helix Users API',
        url: 'https://dev.twitch.tv/docs/api/reference/#get-users',
      },
    ],
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    Icon: VimeoIcon,
    endpoints: {
      authorizationEndpoint: 'https://api.vimeo.com/oauth/authorize',
      tokenEndpoint: 'https://api.vimeo.com/oauth/access_token',
      userinfoEndpoint: 'https://api.vimeo.com/me',
    },
    documentations: [
      {
        title: 'Vimeo OAuth',
        url: 'https://developer.vimeo.com/api/authentication',
      },
      {
        title: 'Vimeo API Reference',
        url: 'https://developer.vimeo.com/api/reference',
      },
    ],
  },
  {
    id: 'x',
    name: 'X',
    Icon: XIcon,
    endpoints: {
      authorizationEndpoint: 'https://twitter.com/i/oauth2/authorize',
      tokenEndpoint: 'https://api.twitter.com/2/oauth2/token',
      userinfoEndpoint: 'https://api.twitter.com/2/users/me',
    },
    documentations: [
      {
        title: 'X Developer Platform - OAuth 2.0',
        url: 'https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/overview',
      },
      {
        title: 'X Developer Platform - OAuth 2.0 Scopes',
        url: 'https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/authorization-code#scopes',
      },
      {
        title: 'X Developer Platform - User lookup me',
        url: 'https://docs.x.com/x-api/users/user-lookup-me',
      },
    ],
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    Icon: XiaomiIcon,
    endpoints: {
      authorizationEndpoint: 'https://account.xiaomi.com/oauth2/authorize',
      tokenEndpoint: 'https://account.xiaomi.com/oauth2/token',
      userinfoEndpoint: 'https://open.account.xiaomi.com/user/profile',
    },
    documentations: [
      {
        title: 'Xiaomi Developer User Guide',
        url: 'https://dev.mi.com/docs/passport/en/user-guide/',
      },
      {
        title: 'Authorization Code Grant Permissions Interface',
        url: 'https://dev.mi.com/docs/passport/en/authorization-code/',
      },
      {
        title: 'Xiaomi Open API',
        url: 'https://dev.mi.com/docs/passport/en/open-api/',
      },
      {
        title: 'Xiaomi Open API Scopes',
        url: 'https://dev.mi.com/docs/passport/en/scopes/',
      },
    ],
  },
  {
    id: 'wechat',
    name: 'WeChat',
    Icon: WeChatIcon,
    endpoints: {
      authorizationEndpoint: 'https://open.weixin.qq.com/connect/qrconnect',
      tokenEndpoint: 'https://api.weixin.qq.com/sns/oauth2/access_token',
      userinfoEndpoint: 'https://api.weixin.qq.com/sns/userinfo',
    },
    documentations: [
      {
        title: 'WeChat Open Platform - Website Application Login',
        url: 'https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/guideline.html',
      },
    ],
  },
  {
    id: 'zalo',
    name: 'Zalo',
    Icon: ZaloIcon,
    endpoints: {
      authorizationEndpoint: 'https://oauth.zaloapp.com/v4/permission',
      tokenEndpoint: 'https://oauth.zaloapp.com/v4/access_token',
      userinfoEndpoint: 'https://graph.zalo.me/v2.0/me',
    },
    documentations: [
      {
        title: 'Zalo OAuth',
        url: 'https://developers.zalo.me/docs/social-api/tai-lieu/tong-quan',
      },
    ],
  },
  {
    id: 'zuora',
    name: 'Zuora',
    Icon: ZuoraIcon,
    endpoints: {
      authorizationEndpoint: 'https://rest.zuora.com/oauth/authorize',
      tokenEndpoint: 'https://rest.zuora.com/oauth/token',
      // Zuora does not have a standard userinfo endpoint. You need to call /v1/users/me using the access token
      // Each environment uses a different base URL. Refer to: https://developer.zuora.com/v1-api-reference/introduction/
    },
    documentations: [
      {
        title: 'Zuora OAuth',
        url: 'https://developer.zuora.com/v1-api-reference/api/tag/OAuth/',
      },
      {
        title: 'Zuora API Reference',
        url: 'https://developer.zuora.com/v1-api-reference/introduction/',
      },
    ],
  },
];

export const getProviderById = (id: string) => providers.find((provider) => provider.id === id);

export const searchProviders = (keyword?: string) => {
  if (!keyword) {
    return providers;
  }

  const lowerCaseKeyword = keyword.toLowerCase();

  return providers.filter((provider) => {
    return (
      provider.name.toLowerCase().includes(lowerCaseKeyword) ||
      provider.id.toLowerCase().includes(lowerCaseKeyword)
    );
  });
};
/* eslint-enable max-lines */
