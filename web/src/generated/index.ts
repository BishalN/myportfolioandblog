import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:1337/graphql", {
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

export type Article = {
  __typename?: 'Article';
  author?: Maybe<Writer>;
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  playlist?: Maybe<Category>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  tools?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  aggregate?: Maybe<ArticleAggregator>;
  groupBy?: Maybe<ArticleGroupBy>;
  values?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleConnectionAuthor = {
  __typename?: 'ArticleConnectionAuthor';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionCreated_At = {
  __typename?: 'ArticleConnectionCreated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionDescription = {
  __typename?: 'ArticleConnectionDescription';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionImage = {
  __typename?: 'ArticleConnectionImage';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionPlaylist = {
  __typename?: 'ArticleConnectionPlaylist';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionPublished_At = {
  __typename?: 'ArticleConnectionPublished_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionSlug = {
  __typename?: 'ArticleConnectionSlug';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTools = {
  __typename?: 'ArticleConnectionTools';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: 'ArticleConnectionUpdated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  author?: Maybe<Array<Maybe<ArticleConnectionAuthor>>>;
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ArticleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  image?: Maybe<Array<Maybe<ArticleConnectionImage>>>;
  playlist?: Maybe<Array<Maybe<ArticleConnectionPlaylist>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  tools?: Maybe<Array<Maybe<ArticleConnectionTools>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
};

export type ArticleInput = {
  author?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  playlist?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  tools?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<Array<Maybe<Article>>>;
  slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type CategoryPostsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate?: Maybe<CategoryAggregator>;
  groupBy?: Maybe<CategoryGroupBy>;
  values?: Maybe<Array<Maybe<Category>>>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionSlug = {
  __typename?: 'CategoryConnectionSlug';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
};

export type CategoryInput = {
  created_by?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentSectionsAbout = {
  __typename?: 'ComponentSectionsAbout';
  blogs?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  watch?: Maybe<Scalars['String']>;
  work?: Maybe<Scalars['String']>;
};

export type ComponentSectionsAboutInput = {
  blogs?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  watch?: Maybe<Scalars['String']>;
  work?: Maybe<Scalars['String']>;
};

export type ComponentSectionsContactInput = {
  email?: Maybe<Scalars['String']>;
  insta?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type ComponentSectionsContacts = {
  __typename?: 'ComponentSectionsContacts';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  insta?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  id: Scalars['ID'];
  navlinks?: Maybe<Scalars['String']>;
  profile?: Maybe<UploadFile>;
  title: Scalars['String'];
};

export type ComponentSectionsHeroInput = {
  navlinks?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type ComponentSectionsRecentPostInput = {
  _?: Maybe<Scalars['String']>;
};

export type ComponentSectionsRecentPosts = {
  __typename?: 'ComponentSectionsRecentPosts';
  id: Scalars['ID'];
};

export type ComponentSectionsWorkInput = {
  project?: Maybe<Scalars['JSON']>;
};

export type ComponentSectionsWorks = {
  __typename?: 'ComponentSectionsWorks';
  id: Scalars['ID'];
  project?: Maybe<Scalars['JSON']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
};

export type ComponentSharedSeoInput = {
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
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
  Contacts?: Maybe<ComponentSectionsContacts>;
  about?: Maybe<ComponentSectionsAbout>;
  created_at: Scalars['DateTime'];
  hero?: Maybe<ComponentSectionsHero>;
  id: Scalars['ID'];
  seo?: Maybe<ComponentSharedSeo>;
  updated_at: Scalars['DateTime'];
};

export type HomepageInput = {
  Contacts?: Maybe<ComponentSectionsContactInput>;
  about?: Maybe<ComponentSectionsAboutInput>;
  created_by?: Maybe<Scalars['ID']>;
  hero: ComponentSectionsHeroInput;
  seo?: Maybe<ComponentSharedSeoInput>;
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

export type Morph = Article | ArticleAggregator | ArticleConnection | ArticleConnectionAuthor | ArticleConnectionContent | ArticleConnectionCreated_At | ArticleConnectionDescription | ArticleConnectionId | ArticleConnectionImage | ArticleConnectionPlaylist | ArticleConnectionPublished_At | ArticleConnectionSlug | ArticleConnectionTitle | ArticleConnectionTools | ArticleConnectionUpdated_At | ArticleGroupBy | Category | CategoryAggregator | CategoryConnection | CategoryConnectionCreated_At | CategoryConnectionId | CategoryConnectionName | CategoryConnectionSlug | CategoryConnectionUpdated_At | CategoryGroupBy | ComponentSectionsAbout | ComponentSectionsContacts | ComponentSectionsHero | ComponentSectionsRecentPosts | ComponentSectionsWorks | ComponentSharedSeo | Homepage | I18NLocale | Projects | ProjectsAggregator | ProjectsConnection | ProjectsConnectionCreated_At | ProjectsConnectionDescription | ProjectsConnectionId | ProjectsConnectionPublished_At | ProjectsConnectionTitle | ProjectsConnectionTools | ProjectsConnectionUpdated_At | ProjectsConnectionUrl | ProjectsGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Writer | WriterAggregator | WriterConnection | WriterConnectionBio | WriterConnectionCreated_At | WriterConnectionEmail | WriterConnectionId | WriterConnectionName | WriterConnectionPicture | WriterConnectionUpdated_At | WriterGroupBy | CreateArticlePayload | CreateCategoryPayload | CreateProjectPayload | CreateRolePayload | CreateUserPayload | CreateWriterPayload | DeleteArticlePayload | DeleteCategoryPayload | DeleteFilePayload | DeleteHomepagePayload | DeleteProjectPayload | DeleteRolePayload | DeleteUserPayload | DeleteWriterPayload | UpdateArticlePayload | UpdateCategoryPayload | UpdateHomepagePayload | UpdateProjectPayload | UpdateRolePayload | UpdateUserPayload | UpdateWriterPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticlePayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createWriter?: Maybe<CreateWriterPayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteHomepage?: Maybe<DeleteHomepagePayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
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
  updateArticle?: Maybe<UpdateArticlePayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateFileInfo: UploadFile;
  updateHomepage?: Maybe<UpdateHomepagePayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateWriter?: Maybe<UpdateWriterPayload>;
  upload: UploadFile;
};


export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
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


export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
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


export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateHomepageArgs = {
  input?: Maybe<UpdateHomepageInput>;
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
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

export type ProjectInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  tools?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type Projects = {
  __typename?: 'Projects';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Array<Maybe<UploadFile>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  tools?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


export type ProjectsImageArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProjectsAggregator = {
  __typename?: 'ProjectsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  aggregate?: Maybe<ProjectsAggregator>;
  groupBy?: Maybe<ProjectsGroupBy>;
  values?: Maybe<Array<Maybe<Projects>>>;
};

export type ProjectsConnectionCreated_At = {
  __typename?: 'ProjectsConnectionCreated_at';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsConnectionDescription = {
  __typename?: 'ProjectsConnectionDescription';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectsConnectionId = {
  __typename?: 'ProjectsConnectionId';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectsConnectionPublished_At = {
  __typename?: 'ProjectsConnectionPublished_at';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsConnectionTitle = {
  __typename?: 'ProjectsConnectionTitle';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectsConnectionTools = {
  __typename?: 'ProjectsConnectionTools';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectsConnectionUpdated_At = {
  __typename?: 'ProjectsConnectionUpdated_at';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectsConnectionUrl = {
  __typename?: 'ProjectsConnectionUrl';
  connection?: Maybe<ProjectsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectsGroupBy = {
  __typename?: 'ProjectsGroupBy';
  created_at?: Maybe<Array<Maybe<ProjectsConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ProjectsConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ProjectsConnectionId>>>;
  published_at?: Maybe<Array<Maybe<ProjectsConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<ProjectsConnectionTitle>>>;
  tools?: Maybe<Array<Maybe<ProjectsConnectionTools>>>;
  updated_at?: Maybe<Array<Maybe<ProjectsConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<ProjectsConnectionUrl>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  category?: Maybe<Category>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  homepage?: Maybe<Homepage>;
  me?: Maybe<UsersPermissionsMe>;
  project?: Maybe<Projects>;
  projects?: Maybe<Array<Maybe<Projects>>>;
  projectsConnection?: Maybe<ProjectsConnection>;
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


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticlesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCategoriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
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


export type QueryProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectsConnectionArgs = {
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
  bio?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFile>;
  posts?: Maybe<Array<Maybe<Article>>>;
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

export type WriterConnectionEmail = {
  __typename?: 'WriterConnectionEmail';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['String']>;
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

export type WriterConnectionPicture = {
  __typename?: 'WriterConnectionPicture';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WriterConnectionUpdated_At = {
  __typename?: 'WriterConnectionUpdated_at';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WriterGroupBy = {
  __typename?: 'WriterGroupBy';
  bio?: Maybe<Array<Maybe<WriterConnectionBio>>>;
  created_at?: Maybe<Array<Maybe<WriterConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<WriterConnectionEmail>>>;
  id?: Maybe<Array<Maybe<WriterConnectionId>>>;
  name?: Maybe<Array<Maybe<WriterConnectionName>>>;
  picture?: Maybe<Array<Maybe<WriterConnectionPicture>>>;
  updated_at?: Maybe<Array<Maybe<WriterConnectionUpdated_At>>>;
};

export type WriterInput = {
  bio?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['ID']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Projects>;
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

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
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

export type DeleteProjectInput = {
  where?: Maybe<InputId>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Projects>;
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

export type EditArticleInput = {
  author?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  playlist?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tools?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCategoryInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentSectionsAboutInput = {
  blogs?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  watch?: Maybe<Scalars['String']>;
  work?: Maybe<Scalars['String']>;
};

export type EditComponentSectionsContactInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  insta?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type EditComponentSectionsHeroInput = {
  id?: Maybe<Scalars['ID']>;
  navlinks?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type EditComponentSectionsRecentPostInput = {
  id?: Maybe<Scalars['ID']>;
};

export type EditComponentSectionsWorkInput = {
  id?: Maybe<Scalars['ID']>;
  project?: Maybe<Scalars['JSON']>;
};

export type EditComponentSharedSeoInput = {
  id?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
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
  Contacts?: Maybe<EditComponentSectionsContactInput>;
  about?: Maybe<EditComponentSectionsAboutInput>;
  created_by?: Maybe<Scalars['ID']>;
  hero?: Maybe<EditComponentSectionsHeroInput>;
  seo?: Maybe<EditComponentSharedSeoInput>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProjectInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  tools?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
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
  bio?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['ID']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateArticleInput = {
  data?: Maybe<EditArticleInput>;
  where?: Maybe<InputId>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateCategoryInput = {
  data?: Maybe<EditCategoryInput>;
  where?: Maybe<InputId>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateHomepageInput = {
  data?: Maybe<EditHomepageInput>;
};

export type UpdateHomepagePayload = {
  __typename?: 'updateHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type UpdateProjectInput = {
  data?: Maybe<EditProjectInput>;
  where?: Maybe<InputId>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Projects>;
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

export type LandingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPageQuery = { __typename?: 'Query', homepage?: { __typename?: 'Homepage', seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null | undefined, hero?: { __typename?: 'ComponentSectionsHero', title: string, navlinks?: string | null | undefined, profile?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, url: string } | null | undefined } | null | undefined, about?: { __typename?: 'ComponentSectionsAbout', work?: string | null | undefined, blogs?: string | null | undefined, watch?: string | null | undefined, email?: string | null | undefined } | null | undefined, Contacts?: { __typename?: 'ComponentSectionsContacts', title?: string | null | undefined, email?: string | null | undefined, insta?: string | null | undefined, twitter?: string | null | undefined, youtube?: string | null | undefined } | null | undefined } | null | undefined, articles?: Array<{ __typename?: 'Article', updated_at: any, created_at: any, title: string, description: string, content: string, tools?: string | null | undefined, slug: string, playlist?: { __typename?: 'Category', name: string } | null | undefined } | null | undefined> | null | undefined, projects?: Array<{ __typename?: 'Projects', title?: string | null | undefined, description?: string | null | undefined, tools?: string | null | undefined, url?: string | null | undefined, image?: Array<{ __typename?: 'UploadFile', name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, size: number, url: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined };


export const LandingPageDocument = `
    query LandingPage {
  homepage {
    seo {
      metaTitle
      metaDescription
    }
    hero {
      title
      navlinks
      profile {
        name
        alternativeText
        caption
        width
        height
        formats
        url
      }
    }
    about {
      work
      blogs
      watch
      email
    }
    Contacts {
      title
      email
      insta
      twitter
      youtube
    }
  }
  articles(sort: "created_at:desc", limit: 3) {
    updated_at
    created_at
    title
    description
    content
    tools
    slug
    playlist {
      name
    }
  }
  projects {
    title
    description
    tools
    url
    image {
      name
      alternativeText
      caption
      width
      height
      formats
      size
      url
    }
  }
}
    `;
export const useLandingPageQuery = <
      TData = LandingPageQuery,
      TError = unknown
    >(
      variables?: LandingPageQueryVariables,
      options?: UseQueryOptions<LandingPageQuery, TError, TData>
    ) =>
    useQuery<LandingPageQuery, TError, TData>(
      variables === undefined ? ['LandingPage'] : ['LandingPage', variables],
      fetcher<LandingPageQuery, LandingPageQueryVariables>(LandingPageDocument, variables),
      options
    );