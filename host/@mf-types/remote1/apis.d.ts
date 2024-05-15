
    export type RemoteKeys = 'remote1/Button';
    type PackageType<T> = T extends 'remote1/Button' ? typeof import('remote1/Button') :any;