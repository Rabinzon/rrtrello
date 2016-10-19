up:
	npm i

run:
	npm start

comp:
	mkdir src/components/${name};
	touch src/components/${name}/${name}.jsx;
	echo "import ${name} from './${name}.jsx';\n\nexport default ${name};" >> src/components/${name}/index.js

cont:
	mkdir src/container/${name};
	touch src/container/${name}/${name}.jsx;
	echo "import ${name} from './${name}.jsx';\n\nexport default ${name};" >> src/container/${name}/index.js