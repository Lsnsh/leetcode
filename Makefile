# .PHONY: dist test
default: help

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake new <problem-number> <problem-name> [中文名] [标签]\033[0m\t---  添加新的 leetcode 题目 例如 'make new 1 two-sum 两数之和 数组、哈希表'"
