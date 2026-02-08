param(
  [string]$Message
)

$ErrorActionPreference = 'Stop'

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
Set-Location $repoRoot

if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = "Auto sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

git add -A | Out-Null

$staged = git diff --cached --name-only
if ([string]::IsNullOrWhiteSpace($staged)) {
  Write-Host 'No changes to sync.'
  exit 0
}

git commit -m $Message | Out-Null
git push | Out-Null

Write-Host 'Synced to GitHub.'
