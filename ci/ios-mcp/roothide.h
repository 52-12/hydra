#ifndef ROOTHIDE_STUB_H
#define ROOTHIDE_STUB_H
#import <Foundation/Foundation.h>
#include <string.h>
#include <stdio.h>
#include <limits.h>

static inline NSString *_jb_ns(NSString *p) {
    if (!p) return p;
    if ([p hasPrefix:@"/var/jb"]) return p;
    return [@"/var/jb" stringByAppendingString:p];
}
static inline const char *_jb_c(const char *p) {
    static __thread char buf[PATH_MAX];
    if (!p) return p;
    if (strncmp(p, "/var/jb", 7) == 0) return p;
    snprintf(buf, sizeof(buf), "/var/jb%s", p);
    return buf;
}
static inline NSString *_rf_ns(NSString *p) {
    if (p && [p hasPrefix:@"/var/jb"]) {
        NSString *r = [p substringFromIndex:7];
        return r.length ? r : @"/";
    }
    return p;
}
static inline const char *_rf_c(const char *p) {
    if (p && strncmp(p, "/var/jb", 7) == 0) return p[7] ? p + 7 : "/";
    return p;
}

#define jbroot(p) _Generic((p), NSString *: _jb_ns, default: _jb_c)(p)
#define rootfs(p) _Generic((p), NSString *: _rf_ns, default: _rf_c)(p)
#define libroot() @"/var/jb"
#endif
