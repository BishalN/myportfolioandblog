import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type ComponentSectionAbout = {
  __typename?: 'ComponentSectionAbout';
  blogs: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  watch: Scalars['String'];
  work: Scalars['String'];
};

export type ComponentSectionAboutInput = {
  blogs: Scalars['String'];
  email: Scalars['String'];
  watch: Scalars['String'];
  work: Scalars['String'];
};

export type ComponentSectionContact = {
  __typename?: 'ComponentSectionContact';
  email: Scalars['String'];
  id: Scalars['ID'];
  insta: Scalars['String'];
  linkedin: Scalars['String'];
  title: Scalars['String'];
  twitter: Scalars['String'];
  youtube: Scalars['String'];
};

export type ComponentSectionContactInput = {
  email: Scalars['String'];
  insta: Scalars['String'];
  linkedin: Scalars['String'];
  title: Scalars['String'];
  twitter: Scalars['String'];
  youtube: Scalars['String'];
};

export type ComponentSectionHero = {
  __typename?: 'ComponentSectionHero';
  id: Scalars['ID'];
  navlinks: Scalars['String'];
  profile?: Maybe<Array<Maybe<UploadFile>>>;
  title: Scalars['String'];
};


export type ComponentSectionHeroProfileArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentSectionHeroInput = {
  navlinks: Scalars['String'];
  profile?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title: Scalars['String'];
};

export type ComponentSectionProjectInput = {
  bg?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  tools: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentSectionProjects = {
  __typename?: 'ComponentSectionProjects';
  bg?: Maybe<UploadFile>;
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  title: Scalars['String'];
  tools: Scalars['String'];
  url: Scalars['String'];
};

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  about?: Maybe<ComponentSectionAbout>;
  contact?: Maybe<ComponentSectionContact>;
  created_at: Scalars['DateTime'];
  hero?: Maybe<ComponentSectionHero>;
  id: Scalars['ID'];
  projects?: Maybe<Array<Maybe<ComponentSectionProjects>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type HomepageInput = {
  about?: Maybe<ComponentSectionAboutInput>;
  contact?: Maybe<ComponentSectionContactInput>;
  created_by?: Maybe<Scalars['ID']>;
  hero?: Maybe<ComponentSectionHeroInput>;
  projects?: Maybe<Array<Maybe<ComponentSectionProjectInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Morph = ComponentSectionAbout | ComponentSectionContact | ComponentSectionHero | ComponentSectionProjects | Homepage | I18NLocale | Playlist | PlaylistAggregator | PlaylistConnection | PlaylistConnectionCreated_At | PlaylistConnectionDescription | PlaylistConnectionId | PlaylistConnectionPublished_At | PlaylistConnectionSlug | PlaylistConnectionTitle | PlaylistConnectionUpdated_At | PlaylistGroupBy | Posts | PostsAggregator | PostsConnection | PostsConnectionCreated_At | PostsConnectionDescription | PostsConnectionId | PostsConnectionPlaylist | PostsConnectionPublished_At | PostsConnectionSlug | PostsConnectionTitle | PostsConnectionTopics | PostsConnectionUpdated_At | PostsConnectionWriter | PostsGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Writer | WriterAggregator | WriterConnection | WriterConnectionAvatar | WriterConnectionBio | WriterConnectionCreated_At | WriterConnectionId | WriterConnectionName | WriterConnectionPublished_At | WriterConnectionUpdated_At | WriterGroupBy | CreatePlaylistPayload | CreatePostPayload | CreateRolePayload | CreateUserPayload | CreateWriterPayload | DeleteFilePayload | DeleteHomepagePayload | DeletePlaylistPayload | DeletePostPayload | DeleteRolePayload | DeleteUserPayload | DeleteWriterPayload | UpdateHomepagePayload | UpdatePlaylistPayload | UpdatePostPayload | UpdateRolePayload | UpdateUserPayload | UpdateWriterPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createPlaylist?: Maybe<CreatePlaylistPayload>;
  createPost?: Maybe<CreatePostPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createWriter?: Maybe<CreateWriterPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteHomepage?: Maybe<DeleteHomepagePayload>;
  deletePlaylist?: Maybe<DeletePlaylistPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteWriter?: Maybe<DeleteWriterPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFile;
  updateHomepage?: Maybe<UpdateHomepagePayload>;
  updatePlaylist?: Maybe<UpdatePlaylistPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateWriter?: Maybe<UpdateWriterPayload>;
  upload: UploadFile;
};


export type MutationCreatePlaylistArgs = {
  input?: Maybe<CreatePlaylistInput>;
};


export type MutationCreatePostArgs = {
  input?: Maybe<CreatePostInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationCreateWriterArgs = {
  input?: Maybe<CreateWriterInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationDeletePlaylistArgs = {
  input?: Maybe<DeletePlaylistInput>;
};


export type MutationDeletePostArgs = {
  input?: Maybe<DeletePostInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationDeleteWriterArgs = {
  input?: Maybe<DeleteWriterInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateHomepageArgs = {
  input?: Maybe<UpdateHomepageInput>;
};


export type MutationUpdatePlaylistArgs = {
  input?: Maybe<UpdatePlaylistInput>;
};


export type MutationUpdatePostArgs = {
  input?: Maybe<UpdatePostInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationUpdateWriterArgs = {
  input?: Maybe<UpdateWriterInput>;
};


export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  posts?: Maybe<Array<Maybe<Posts>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type PlaylistPostsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PlaylistAggregator = {
  __typename?: 'PlaylistAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PlaylistConnection = {
  __typename?: 'PlaylistConnection';
  aggregate?: Maybe<PlaylistAggregator>;
  groupBy?: Maybe<PlaylistGroupBy>;
  values?: Maybe<Array<Maybe<Playlist>>>;
};

export type PlaylistConnectionCreated_At = {
  __typename?: 'PlaylistConnectionCreated_at';
  connection?: Maybe<PlaylistConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PlaylistConnectionDescription = {
  __typename?: 'PlaylistConnectionDescription';
  connection?: Maybe<PlaylistConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PlaylistConnectionId = {
  __typename?: 'PlaylistConnectionId';
  connection?: Maybe<PlaylistConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PlaylistConnectionPublished_At = {
  __typename?: 'PlaylistConnectionPublished_at';
  connection?: Maybe<PlaylistConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PlaylistConnectionSlug = {
  __typename?: 'PlaylistConnectionSlug';
  connection?: Maybe<PlaylistConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PlaylistConnectionTitle = {
  __typename?: 'PlaylistConnectionTitle';
  connection?: Maybe<PlaylistConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PlaylistConnectionUpdated_At = {
  __typename?: 'PlaylistConnectionUpdated_at';
  connection?: Maybe<PlaylistConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PlaylistGroupBy = {
  __typename?: 'PlaylistGroupBy';
  created_at?: Maybe<Array<Maybe<PlaylistConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<PlaylistConnectionDescription>>>;
  id?: Maybe<Array<Maybe<PlaylistConnectionId>>>;
  published_at?: Maybe<Array<Maybe<PlaylistConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<PlaylistConnectionSlug>>>;
  title?: Maybe<Array<Maybe<PlaylistConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<PlaylistConnectionUpdated_At>>>;
};

export type PlaylistInput = {
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type PostInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  playlist?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  topics: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
  writer?: Maybe<Scalars['ID']>;
};

export type Posts = {
  __typename?: 'Posts';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  playlist?: Maybe<Playlist>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  topics: Scalars['String'];
  updated_at: Scalars['DateTime'];
  writer?: Maybe<Writer>;
};

export type PostsAggregator = {
  __typename?: 'PostsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PostsConnection = {
  __typename?: 'PostsConnection';
  aggregate?: Maybe<PostsAggregator>;
  groupBy?: Maybe<PostsGroupBy>;
  values?: Maybe<Array<Maybe<Posts>>>;
};

export type PostsConnectionCreated_At = {
  __typename?: 'PostsConnectionCreated_at';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PostsConnectionDescription = {
  __typename?: 'PostsConnectionDescription';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PostsConnectionId = {
  __typename?: 'PostsConnectionId';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PostsConnectionPlaylist = {
  __typename?: 'PostsConnectionPlaylist';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PostsConnectionPublished_At = {
  __typename?: 'PostsConnectionPublished_at';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PostsConnectionSlug = {
  __typename?: 'PostsConnectionSlug';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PostsConnectionTitle = {
  __typename?: 'PostsConnectionTitle';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PostsConnectionTopics = {
  __typename?: 'PostsConnectionTopics';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PostsConnectionUpdated_At = {
  __typename?: 'PostsConnectionUpdated_at';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PostsConnectionWriter = {
  __typename?: 'PostsConnectionWriter';
  connection?: Maybe<PostsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PostsGroupBy = {
  __typename?: 'PostsGroupBy';
  created_at?: Maybe<Array<Maybe<PostsConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<PostsConnectionDescription>>>;
  id?: Maybe<Array<Maybe<PostsConnectionId>>>;
  playlist?: Maybe<Array<Maybe<PostsConnectionPlaylist>>>;
  published_at?: Maybe<Array<Maybe<PostsConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<PostsConnectionSlug>>>;
  title?: Maybe<Array<Maybe<PostsConnectionTitle>>>;
  topics?: Maybe<Array<Maybe<PostsConnectionTopics>>>;
  updated_at?: Maybe<Array<Maybe<PostsConnectionUpdated_At>>>;
  writer?: Maybe<Array<Maybe<PostsConnectionWriter>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  homepage?: Maybe<Homepage>;
  me?: Maybe<UsersPermissionsMe>;
  playlist?: Maybe<Playlist>;
  playlists?: Maybe<Array<Maybe<Playlist>>>;
  playlistsConnection?: Maybe<PlaylistConnection>;
  post?: Maybe<Posts>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  postsConnection?: Maybe<PostsConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  writer?: Maybe<Writer>;
  writers?: Maybe<Array<Maybe<Writer>>>;
  writersConnection?: Maybe<WriterConnection>;
};


export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHomepageArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryPlaylistArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPlaylistsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPlaylistsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPostsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWriterArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryWritersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWritersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type Writer = {
  __typename?: 'Writer';
  avatar?: Maybe<UploadFile>;
  bio: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<Array<Maybe<Posts>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type WriterPostsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type WriterAggregator = {
  __typename?: 'WriterAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WriterConnection = {
  __typename?: 'WriterConnection';
  aggregate?: Maybe<WriterAggregator>;
  groupBy?: Maybe<WriterGroupBy>;
  values?: Maybe<Array<Maybe<Writer>>>;
};

export type WriterConnectionAvatar = {
  __typename?: 'WriterConnectionAvatar';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WriterConnectionBio = {
  __typename?: 'WriterConnectionBio';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WriterConnectionCreated_At = {
  __typename?: 'WriterConnectionCreated_at';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WriterConnectionId = {
  __typename?: 'WriterConnectionId';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WriterConnectionName = {
  __typename?: 'WriterConnectionName';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WriterConnectionPublished_At = {
  __typename?: 'WriterConnectionPublished_at';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WriterConnectionUpdated_At = {
  __typename?: 'WriterConnectionUpdated_at';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WriterGroupBy = {
  __typename?: 'WriterGroupBy';
  avatar?: Maybe<Array<Maybe<WriterConnectionAvatar>>>;
  bio?: Maybe<Array<Maybe<WriterConnectionBio>>>;
  created_at?: Maybe<Array<Maybe<WriterConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<WriterConnectionId>>>;
  name?: Maybe<Array<Maybe<WriterConnectionName>>>;
  published_at?: Maybe<Array<Maybe<WriterConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<WriterConnectionUpdated_At>>>;
};

export type WriterInput = {
  avatar?: Maybe<Scalars['ID']>;
  bio: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePlaylistInput = {
  data?: Maybe<PlaylistInput>;
};

export type CreatePlaylistPayload = {
  __typename?: 'createPlaylistPayload';
  playlist?: Maybe<Playlist>;
};

export type CreatePostInput = {
  data?: Maybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Posts>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateWriterInput = {
  data?: Maybe<WriterInput>;
};

export type CreateWriterPayload = {
  __typename?: 'createWriterPayload';
  writer?: Maybe<Writer>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteHomepagePayload = {
  __typename?: 'deleteHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type DeletePlaylistInput = {
  where?: Maybe<InputId>;
};

export type DeletePlaylistPayload = {
  __typename?: 'deletePlaylistPayload';
  playlist?: Maybe<Playlist>;
};

export type DeletePostInput = {
  where?: Maybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Posts>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteWriterInput = {
  where?: Maybe<InputId>;
};

export type DeleteWriterPayload = {
  __typename?: 'deleteWriterPayload';
  writer?: Maybe<Writer>;
};

export type EditComponentSectionAboutInput = {
  blogs?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  watch?: Maybe<Scalars['String']>;
  work?: Maybe<Scalars['String']>;
};

export type EditComponentSectionContactInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  insta?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type EditComponentSectionHeroInput = {
  id?: Maybe<Scalars['ID']>;
  navlinks?: Maybe<Scalars['String']>;
  profile?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
};

export type EditComponentSectionProjectInput = {
  bg?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  tools?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EditHomepageInput = {
  about?: Maybe<EditComponentSectionAboutInput>;
  contact?: Maybe<EditComponentSectionContactInput>;
  created_by?: Maybe<Scalars['ID']>;
  hero?: Maybe<EditComponentSectionHeroInput>;
  projects?: Maybe<Array<Maybe<EditComponentSectionProjectInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPlaylistInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPostInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  playlist?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  topics?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  writer?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type EditWriterInput = {
  avatar?: Maybe<Scalars['ID']>;
  bio?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateHomepageInput = {
  data?: Maybe<EditHomepageInput>;
};

export type UpdateHomepagePayload = {
  __typename?: 'updateHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type UpdatePlaylistInput = {
  data?: Maybe<EditPlaylistInput>;
  where?: Maybe<InputId>;
};

export type UpdatePlaylistPayload = {
  __typename?: 'updatePlaylistPayload';
  playlist?: Maybe<Playlist>;
};

export type UpdatePostInput = {
  data?: Maybe<EditPostInput>;
  where?: Maybe<InputId>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Posts>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateWriterInput = {
  data?: Maybe<EditWriterInput>;
  where?: Maybe<InputId>;
};

export type UpdateWriterPayload = {
  __typename?: 'updateWriterPayload';
  writer?: Maybe<Writer>;
};

export type BlogQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BlogQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Posts', id: string, title: string, created_at: any, updated_at: any, topics: string, description?: string | null | undefined, slug: string, writer?: { __typename?: 'Writer', id: string, name: string, bio: string, avatar?: { __typename?: 'UploadFile', formats?: any | null | undefined, url: string } | null | undefined } | null | undefined, playlist?: { __typename?: 'Playlist', title: string, slug: string, posts?: Array<{ __typename?: 'Posts', updated_at: any, title: string, topics: string, description?: string | null | undefined, slug: string } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homepage?: { __typename?: 'Homepage', hero?: { __typename?: 'ComponentSectionHero', title: string, navlinks: string, profile?: Array<{ __typename?: 'UploadFile', formats?: any | null | undefined, name: string, width?: number | null | undefined, height?: number | null | undefined, url: string } | null | undefined> | null | undefined } | null | undefined, about?: { __typename?: 'ComponentSectionAbout', work: string, blogs: string, watch: string, email: string } | null | undefined, projects?: Array<{ __typename?: 'ComponentSectionProjects', title: string, url: string, description: string, tools: string, bg?: { __typename?: 'UploadFile', url: string, formats?: any | null | undefined } | null | undefined, image?: { __typename?: 'UploadFile', name: string, width?: number | null | undefined, height?: number | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, contact?: { __typename?: 'ComponentSectionContact', email: string, insta: string, youtube: string, twitter: string, linkedin: string, title: string } | null | undefined } | null | undefined, posts?: Array<{ __typename?: 'Posts', title: string, updated_at: any, topics: string, slug: string, description?: string | null | undefined } | null | undefined> | null | undefined };

export type StaticPlaylistsPathQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StaticPlaylistsPathQueryQuery = { __typename?: 'Query', playlists?: Array<{ __typename?: 'Playlist', slug: string } | null | undefined> | null | undefined };

export type StaticPostsPathQueryVariables = Exact<{ [key: string]: never; }>;


export type StaticPostsPathQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Posts', slug: string } | null | undefined> | null | undefined };

export type PlaylistPageQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaylistPageQuery = { __typename?: 'Query', playlists?: Array<{ __typename?: 'Playlist', id: string, title: string, slug: string, description: string, posts?: Array<{ __typename?: 'Posts', updated_at: any, title: string, topics: string, description?: string | null | undefined, slug: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type PlaylistPostsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PlaylistPostsQuery = { __typename?: 'Query', playlists?: Array<{ __typename?: 'Playlist', id: string, title: string, description: string, posts?: Array<{ __typename?: 'Posts', id: string, updated_at: any, title: string, topics: string, slug: string, description?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };


export const BlogDocument = `
    query Blog($slug: String!) {
  posts(where: {slug: $slug}) {
    id
    title
    created_at
    updated_at
    topics
    description
    slug
    writer {
      id
      name
      bio
      avatar {
        formats
        url
      }
    }
    playlist {
      title
      slug
      posts {
        updated_at
        title
        topics
        description
        slug
      }
    }
  }
}
    `;
export const useBlogQuery = <
      TData = BlogQuery,
      TError = unknown
    >(
      variables: BlogQueryVariables,
      options?: UseQueryOptions<BlogQuery, TError, TData>
    ) =>
    useQuery<BlogQuery, TError, TData>(
      ['Blog', variables],
      fetcher<BlogQuery, BlogQueryVariables>(BlogDocument, variables),
      options
    );
export const HomePageDocument = `
    query HomePage {
  homepage {
    hero {
      title
      navlinks
      profile {
        formats
        name
        width
        height
        url
      }
    }
    about {
      work
      blogs
      watch
      email
    }
    projects {
      title
      url
      bg {
        url
        formats
      }
      description
      tools
      image {
        name
        width
        height
        url
      }
    }
    contact {
      email
      insta
      youtube
      twitter
      linkedin
      title
    }
  }
  posts(sort: "created_at:desc", limit: 3) {
    title
    updated_at
    topics
    slug
    description
  }
}
    `;
export const useHomePageQuery = <
      TData = HomePageQuery,
      TError = unknown
    >(
      variables?: HomePageQueryVariables,
      options?: UseQueryOptions<HomePageQuery, TError, TData>
    ) =>
    useQuery<HomePageQuery, TError, TData>(
      variables === undefined ? ['HomePage'] : ['HomePage', variables],
      fetcher<HomePageQuery, HomePageQueryVariables>(HomePageDocument, variables),
      options
    );
export const StaticPlaylistsPathQueryDocument = `
    query StaticPlaylistsPathQuery {
  playlists {
    slug
  }
}
    `;
export const useStaticPlaylistsPathQueryQuery = <
      TData = StaticPlaylistsPathQueryQuery,
      TError = unknown
    >(
      variables?: StaticPlaylistsPathQueryQueryVariables,
      options?: UseQueryOptions<StaticPlaylistsPathQueryQuery, TError, TData>
    ) =>
    useQuery<StaticPlaylistsPathQueryQuery, TError, TData>(
      variables === undefined ? ['StaticPlaylistsPathQuery'] : ['StaticPlaylistsPathQuery', variables],
      fetcher<StaticPlaylistsPathQueryQuery, StaticPlaylistsPathQueryQueryVariables>(StaticPlaylistsPathQueryDocument, variables),
      options
    );
export const StaticPostsPathDocument = `
    query StaticPostsPath {
  posts {
    slug
  }
}
    `;
export const useStaticPostsPathQuery = <
      TData = StaticPostsPathQuery,
      TError = unknown
    >(
      variables?: StaticPostsPathQueryVariables,
      options?: UseQueryOptions<StaticPostsPathQuery, TError, TData>
    ) =>
    useQuery<StaticPostsPathQuery, TError, TData>(
      variables === undefined ? ['StaticPostsPath'] : ['StaticPostsPath', variables],
      fetcher<StaticPostsPathQuery, StaticPostsPathQueryVariables>(StaticPostsPathDocument, variables),
      options
    );
export const PlaylistPageDocument = `
    query PlaylistPage {
  playlists {
    id
    title
    slug
    description
    posts {
      updated_at
      title
      topics
      description
      slug
    }
  }
}
    `;
export const usePlaylistPageQuery = <
      TData = PlaylistPageQuery,
      TError = unknown
    >(
      variables?: PlaylistPageQueryVariables,
      options?: UseQueryOptions<PlaylistPageQuery, TError, TData>
    ) =>
    useQuery<PlaylistPageQuery, TError, TData>(
      variables === undefined ? ['PlaylistPage'] : ['PlaylistPage', variables],
      fetcher<PlaylistPageQuery, PlaylistPageQueryVariables>(PlaylistPageDocument, variables),
      options
    );
export const PlaylistPostsDocument = `
    query PlaylistPosts($slug: String!) {
  playlists(where: {slug: $slug}) {
    id
    title
    description
    posts {
      id
      updated_at
      title
      topics
      slug
      description
    }
  }
}
    `;
export const usePlaylistPostsQuery = <
      TData = PlaylistPostsQuery,
      TError = unknown
    >(
      variables: PlaylistPostsQueryVariables,
      options?: UseQueryOptions<PlaylistPostsQuery, TError, TData>
    ) =>
    useQuery<PlaylistPostsQuery, TError, TData>(
      ['PlaylistPosts', variables],
      fetcher<PlaylistPostsQuery, PlaylistPostsQueryVariables>(PlaylistPostsDocument, variables),
      options
    );