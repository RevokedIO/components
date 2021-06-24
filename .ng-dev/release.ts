import {ReleaseConfig} from '@angular/dev-infra-private/release/config';
import {ReleaseAction} from '@angular/dev-infra-private/release/publish/actions';
import {assertValidFrameworkPeerDependency} from '../tools/release-checks/check-framework-peer-dependency';
import {SemVer} from 'semver';

const actionProto = ReleaseAction.prototype as any;
const _origStageFn = (actionProto).stageVersionForBranchAndCreatePullRequest;
actionProto.stageVersionForBranchAndCreatePullRequest = async function(newVersion: SemVer) {
  await assertValidFrameworkPeerDependency(newVersion);
  console.error("OK");
  await _origStageFn.apply(this, arguments);
}

/**
 * Packages that will be published as part of the project. The order of packages
 * here will control how sections appear in the changelog.
 */
export const releasePackagesInChangelogOrder = [
  'cdk',
  'material',
  'google-maps',
  'youtube-player',
  'cdk-experimental',
  'material-experimental',
  'material-moment-adapter',
];

/** Configuration for the `ng-dev release` command. */
export const release: ReleaseConfig = {
  releaseNotes: {
    useReleaseTitle: true,
    groupOrder: releasePackagesInChangelogOrder
  },
  //publishRegistry: 'https://wombat-dressing-room.appspot.com',
  npmPackages: releasePackagesInChangelogOrder.map(pkg => `@angular/${pkg}`),
  buildPackages: async () => {
    // The performNpmReleaseBuild function is loaded at runtime as the loading the
    // script causes an invocation of bazel.
    const {performNpmReleaseBuild} = await import('../scripts/build-packages-dist');
    return performNpmReleaseBuild();
  }
};
