#!/usr/bin/env bash
# Run this to regenerate the contributors list based on Github's API
# Usage: USER=gh_username TOKEN=gh_personal_token ./contributors.sh
# NOTE: requires Bash 4.0+ (run `brew install bash` on Mac)
declare -A contributors

base=https://api.github.com
org=bonfire-networks
type=${4:-all}
user=$USER
token=$TOKEN
max=1000

reposJson=$(curl -v -s -f -u "$user:$token" "$base/orgs/$org/repos?type=$type&per_page=$max")
# echo $reposJson | jq .

readarray -t repos < <(jq -c '.[]' <<< $reposJson)
# echo $repos | jq .

for repo in "${repos[@]}"; do
    # echo $repo | jq .
    url=$(jq -r '.contributors_url' <<< $repo)
    echo $url

    if [[ "$url" == *"bonfire-networks/bonfire"* ]]; then
        repoJson=$(curl -s -f -u "$user:$token" "$url?per_page=$max")
        readarray -t contribs < <(jq -c '.[]' <<< $repoJson)

        for contrib in "${contribs[@]}"; do
            # echo $contrib | jq .
            username=$(jq -r '.login' <<< $contrib)
            echo $username

            contributors["$username"]=$contrib

        done 
    else
        echo "Skip"
    fi
done 

# echo $contributors

data='[]'

for i in "${!contributors[@]}"
do
    data=$(jq -n --arg data "$data" \
                 --arg key "$i"     \
                 --arg value "${contributors[$i]}" \
                 '$data | fromjson + [($value | fromjson)]')
done

# echo "$data"
echo "$data" > img/contributors.json
