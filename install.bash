cat << 'END_CAT'


▗▄▄▄▖▗▖  ▗▖ ▗▄▄▖▗▄▄▖ ▗▄▄▄▖▗▄▄▄ ▗▄▄▄▖▗▄▄▖ ▗▖    ▗▄▖ ▗▖ ▗▖
  █  ▐▛▚▖▐▌▐▌   ▐▌ ▐▌▐▌   ▐▌  █  █  ▐▌ ▐▌▐▌   ▐▌ ▐▌▐▌ ▐▌
  █  ▐▌ ▝▜▌▐▌   ▐▛▀▚▖▐▛▀▀▘▐▌  █  █  ▐▛▀▚▖▐▌   ▐▛▀▜▌▐▛▀▜▌
▗▄█▄▖▐▌  ▐▌▝▚▄▄▖▐▌ ▐▌▐▙▄▄▖▐▙▄▄▀▗▄█▄▖▐▙▄▞▘▐▙▄▄▖▐▌ ▐▌▐▌ ▐▌

                  b y  S o r t y F i x


END_CAT

set -e

echo "Incrediblah: Installing dependencies..."
npm install

echo "Incrediblah: Building project..."
ng build

echo "Incrediblah: Installing pm2..."
sudo npm install -g pm2

cd dist/incrediblah/browser

echo "Incrediblah: Starting server with pm2 on port 2118..."
pm2 start http-server --name "incrediblah" -- -p 2118 -c-1

echo "Incrediblah: Setting up pm2 to start on boot..."
pm2 startup | tail -n 1 | bash

echo "Saving the pm2 process list..."
pm2 save

echo "Incrediblah setup is complete. The app is running on port 2118. You can manage it with pm2."
echo "Use 'pm2 status' or 'pm2 logs incrediblah' for pm2 commands. If you modify the project, rebuild and restart the pm2 instance via the saveChanges.bash script."
