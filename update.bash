cat << 'END_CAT'


▗▄▄▄▖▗▖  ▗▖ ▗▄▄▖▗▄▄▖ ▗▄▄▄▖▗▄▄▄ ▗▄▄▄▖▗▄▄▖ ▗▖    ▗▄▖ ▗▖ ▗▖
  █  ▐▛▚▖▐▌▐▌   ▐▌ ▐▌▐▌   ▐▌  █  █  ▐▌ ▐▌▐▌   ▐▌ ▐▌▐▌ ▐▌
  █  ▐▌ ▝▜▌▐▌   ▐▛▀▚▖▐▛▀▀▘▐▌  █  █  ▐▛▀▚▖▐▌   ▐▛▀▜▌▐▛▀▜▌
▗▄█▄▖▐▌  ▐▌▝▚▄▄▖▐▌ ▐▌▐▙▄▄▖▐▙▄▄▀▗▄█▄▖▐▙▄▞▘▐▙▄▄▖▐▌ ▐▌▐▌ ▐▌

                  b y  S o r t y F i x


END_CAT
echo "Incrediblah: Starting build..."
ng build
cd dist/incrediblah/browser || exit
echo "Incrediblah: Restarting pm2 instance..."
pm2 restart incrediblah
echo Incrediblah: Saved all changes. Please reload your start page.
