import {ReleaseConfig} from '@angular/dev-infra-private/release/config';
import {releasePackages} from '../tools/release/release-output/release-packages';

/** Configuration for the `ng-dev release` command. */
export const release: ReleaseConfig = {
  releaseNotes: {
    useReleaseTitle: true,
    // Hard-coded order for packages to show up in the changelog.
    groupOrder: [
      'cdk',
      'material',
      'google-maps',
      'youtube-player',
      'material-moment-adapter',
      'cdk-experimental',
      'material-experimental',
    ]
  },
  publishRegistry: 'https://wombat-dressing-room.appspot.com',
  npmPackages: releasePackages.map(pkg => `@angular/${pkg}`),
  buildPackages: async () => {
    // The performNpmReleaseBuild function is loaded at runtime as the loading the
    // script causes an invocation of bazel.
    const {performNpmReleaseBuild} = await import('../scripts/build-packages-dist');
    return performNpmReleaseBuild();
  }
};
