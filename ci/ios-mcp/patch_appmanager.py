#!/usr/bin/env python3
"""Apply the TrollStore-style install patch to ios-mcp's AppManager.m."""
import io
import sys

path = sys.argv[1]
s = io.open(path, encoding="utf-8").read()

open_old = """#ifdef MCP_ROOTHIDE
    NSString *mcpRootPath = MCPResolvedJailbreakPath(@"/usr/bin/mcp-root");"""
open_new = """    // PATCH: TrollStore-style install (sign + install) on every package scheme.
    NSString *mcpRootPath = MCPResolvedJailbreakPath(@"/usr/bin/mcp-root");"""

close_old = """    }
#endif

    // Method 1: Use mcp-appinst CLI"""
close_new = """    }

    // Method 1: Use mcp-appinst CLI"""

if s.count(open_old) != 1:
    sys.exit("open guard not found")
if s.count(close_old) != 1:
    sys.exit("close guard not found")

s = s.replace(open_old, open_new).replace(close_old, close_new)
io.open(path, "w", encoding="utf-8").write(s)
print("patched", path)
