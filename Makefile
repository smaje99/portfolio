.DEFAULT_GOAL := help

LATEXMK ?= latexmk
CP ?= cp
MKDIR_P ?= mkdir -p
RM_RF ?= rm -rf

RESUME_DIR := docs/resume
PUBLIC_DOCS := public/docs
BUILD_DIR := $(RESUME_DIR)/.build

ES_TEX := $(RESUME_DIR)/curriculum-vitae.es.tex
EN_TEX := $(RESUME_DIR)/curriculum-vitae.en.tex
ES_PDF := $(BUILD_DIR)/curriculum-vitae.es.pdf
EN_PDF := $(BUILD_DIR)/curriculum-vitae.en.pdf

PUBLIC_ES := $(PUBLIC_DOCS)/curriculum-vitae-sergio-maje.es.pdf
PUBLIC_EN := $(PUBLIC_DOCS)/curriculum-vitae-sergio-maje.en.pdf
PUBLIC_DEFAULT := $(PUBLIC_DOCS)/curriculum-vitae-sergio-maje.pdf

.PHONY: help all cv build publish clean clean-build clean-public

help:
	@printf '%s\n' \
		'Available targets:' \
		'  make cv           Build and publish both CVs' \
		'  make build         Compile CV PDFs into docs/resume/.build' \
		'  make publish       Copy compiled PDFs to public/docs' \
		'  make clean         Remove LaTeX build artifacts' \
		'  make clean-public  Remove published CV PDFs from public/docs'

all: cv

cv: publish

build: $(ES_PDF) $(EN_PDF)

publish: $(PUBLIC_ES) $(PUBLIC_EN) $(PUBLIC_DEFAULT)

$(BUILD_DIR):
	$(MKDIR_P) $@

$(ES_PDF): $(ES_TEX) | $(BUILD_DIR)
	$(LATEXMK) -pdf -interaction=nonstopmode -halt-on-error -outdir=$(BUILD_DIR) $<

$(EN_PDF): $(EN_TEX) | $(BUILD_DIR)
	$(LATEXMK) -pdf -interaction=nonstopmode -halt-on-error -outdir=$(BUILD_DIR) $<

$(PUBLIC_DOCS):
	$(MKDIR_P) $@

$(PUBLIC_ES): $(ES_PDF) | $(PUBLIC_DOCS)
	$(CP) $< $@

$(PUBLIC_EN): $(EN_PDF) | $(PUBLIC_DOCS)
	$(CP) $< $@

$(PUBLIC_DEFAULT): $(PUBLIC_ES)
	$(CP) $< $@

clean-build:
	$(RM_RF) $(BUILD_DIR)

clean-public:
	$(RM) $(PUBLIC_ES) $(PUBLIC_EN) $(PUBLIC_DEFAULT)

clean: clean-build
