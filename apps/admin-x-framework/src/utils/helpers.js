export function getGhostPaths() {
    const path = window.location.pathname;
    const subdir = path.substr(0, path.search('/ghost/'));
    const adminRoot = `${subdir}/ghost/`;
    const assetRoot = `${subdir}/ghost/assets/`;
    const apiRoot = `${subdir}/ghost/api/admin`;
    const activityPubRoot = `${subdir}/.ghost/activitypub`;
    return { subdir, adminRoot, assetRoot, apiRoot, activityPubRoot };
}
export function downloadFile(url) {
    let iframe = document.getElementById('iframeDownload');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'iframeDownload';
        iframe.style.display = 'none';
        document.body.append(iframe);
    }
    iframe.setAttribute('src', url);
}
export function downloadFromEndpoint(path) {
    downloadFile(`${getGhostPaths().apiRoot}${path}`);
}
