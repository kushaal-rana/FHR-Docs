echo "Switching to branch Main"
git checkout main

echo "Building app..."
npm run build 

echo "Deploying file to server..."
scp -r build/* root@172.104.8.187:/var/www/172.104.8.187/

echo "Done!"