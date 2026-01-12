/**
 * Helper function to get image paths from the Shop folder
 * URL encodes the folder name to handle spaces and special characters
 */
export function getShopImagePath(filename: string): string {
  // URL encode the folder name to handle spaces and special characters like &
  const folderName = encodeURIComponent("Shop - Teecherz Home & Office");
  const encodedFilename = encodeURIComponent(filename);
  return `/${folderName}/${encodedFilename}`;
}
