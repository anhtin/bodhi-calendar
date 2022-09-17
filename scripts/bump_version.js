const path = require('path');

const packageJsonPath = path.join(__dirname, '../package.json')

const packageJson = require(packageJsonPath);
const fs = require('fs/promises');

function resolveNewVersion() {
  const currentVersion = packageJson.version;
  const [
    currentVersionDateString,
    currentVersionCount
  ] = currentVersion.split('.');

  const currentDateString = new Date().toISOString().split('T')[0];

  const newVersionCount = currentVersionDateString === currentDateString
    ? +currentVersionCount + 1
    : 0;

  return `${currentDateString}.${newVersionCount}`
}

fs.readFile(packageJsonPath, { encoding: 'utf-8' }).then((content) => {
  const newVersion = resolveNewVersion();
  const newContent = content.replace(
    new RegExp(`("version":\\s").*(".*)`),
    `$1${newVersion}$2`
  );
  fs.writeFile(packageJsonPath, newContent)
})
