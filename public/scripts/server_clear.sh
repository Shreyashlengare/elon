##!/usr/bin/env bash
#rm -rf /home/ubuntu
#!/usr/bin/env bash

# Define the directory to clean up or prepare (replace with the appropriate path)
app_directory="/var/www/html/"

# Ensure the directory exists before attempting to clean it up or prepare it
if [ -d "$app_directory" ]; then
    # Clean up or prepare the directory here
    # For example, remove old files, clear caches, etc.
    # You can add your specific actions here.
else
    echo "Directory not found: $app_directory"
fi
