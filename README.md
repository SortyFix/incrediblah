
# Incrediblah

A hyper-customizable Angular-based start page for your browser!


## Screenshots

![App Screenshot](Screenshot_20241202_005508.png)


## Demo

A demo of the absolute default configuration can be found here: https://incrediblah.netlify.app/. Keep in mind that the colors, the fonts, the positioning, box style and background can be easily modified within the `config.json` file within `/src` after cloning.  
## Run Locally

1. Clone the project

```bash
  git clone https://github.com/SortyFix/incrediblah.git
```

2. Go to the project directory

```bash
  cd incrediblah
```

3. Run bash install script

```bash
  bash install.bash
```

4. Set your browser's start page to the port that has been defined in the `install.bash` script.  
*(default: `localhost:2118`)*. 

## Modify Incrediblah

1. Edit /src/config.json to modify your setup directly
2. After modification, run  
```
bash ~/incrediblah/update.bash
```
3. Reload the start page in case you have it open
## Roadmap

- [x]  Installation and update script
- [x]  Box Blur integration
- [ ]  Greeting
- [ ]  Weather integration
- [ ]  Windows/Mac support for easy install

As I'm currently focussing on another project, this will only be a little side project to work on. If you want to contribute or share your config, see `Contributing`!  

## Contributing

Contributions are always welcome!

If you want to share your own config ("theme") to present on this page, please abide by the following rules:

- The theme title should only contain 1-2 words. The titles should be fairly desciptive; A person should be able to somewhat picture your config when looking at the name only (e.g. "Midnight", "Summer Breeze" etc.).
- Only materials that are compatible with the GPLv3 license may be used in this project. No copyrighted materials with incompatible licenses are allowed. 
- No modifications are allowed beyond changes to the config.json file.
- Share your config via pull request.

If you aim on modifying the project code itself, make sure to:

- share your changes via pull request
- use a fitting and descriptive title
- include a summary of changes and an explaination of the purpose of your PR
- adhere to this project's `coding standards`
- not modify the values of the config.json unless necessary and explainable

## Coding standards

- Write small, modular methods which do not combine multiple functionalities
- Small commits > Big commits
- Remove unused code, console logs and temporary comments
- Avoid boilerplate unless absolutely necessary
- Write unit tests for code with higher complexity
## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

