build:
	rm -rf dbt-athena-docs/build;
	cd dbt-athena-docs && npm run build;

copy-build: clean-artifacts
	cp -r dbt-athena-docs/build/* .

clean-artifacts:
	rm -rf *.html sitemap.xml assets blog docs img markdown-page .nojekyll
