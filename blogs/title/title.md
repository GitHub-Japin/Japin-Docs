---
title: 后端面试常见题笔记(个人总结)
date: 2025/2/18
tags:
 - 面试 
categories:
 - 面试
---

# DB
## MySQL
索引失效情况：
```text
数据分布不均
数据类型不对应
对索引列函数操作、运算操作
左like查询、or查询、is null 和 is not null查询
违背最左匹配原则
```

适合加索引：
```text
1、单表数据量大（超过10w数据量）的且查询频繁的
2、常作为where、order by、group by操作的字段
3、区分度高的列（大量数据不同的列）
4、长字符串（可建立前缀索引）

尽量使用联合索引代替单列索引，节省空间、减少回表
若索引列不存在NULL，增加Not NULL约束
```

案例

SELECT * FROM user WHERE name LIKE '%张%' ORDER BY created DESC
```text
1. 索引优化
前缀索引：如果 name 字段较长，可以为 name 创建前缀索引，减少索引大小。
CREATE INDEX idx_name ON user (name(10));
但前缀索引对 LIKE '%张%' 效果有限，因为 % 在开头时无法利用索引。
全文索引：如果频繁使用模糊查询，考虑使用全文索引。
CREATE FULLTEXT INDEX idx_name ON user (name);
查询时使用 MATCH：
SELECT * FROM user WHERE MATCH(name) AGAINST('张');

2. 减少返回字段
避免使用 SELECT *，只选择需要的字段，减少数据传输量。
SELECT id, name, created FROM user WHERE name LIKE '%张%' ORDER BY created DESC;

3. 分页查询
如果数据量大，使用 LIMIT 分页，避免一次性返回过多数据。
SELECT * FROM user WHERE name LIKE '%张%' ORDER BY created DESC LIMIT 20 OFFSET 0;

4. 缓存结果
如果数据不常变化，考虑缓存查询结果，减少数据库压力。

5. 数据库配置优化
调整缓冲区大小：增加 innodb_buffer_pool_size，提升查询性能。
优化排序操作：确保 sort_buffer_size 足够大，避免磁盘排序。

6. 分区表
如果数据量极大，考虑按 created 字段分区，提升查询效率。
CREATE TABLE user (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    created DATETIME
) PARTITION BY RANGE (YEAR(created)) (
    PARTITION p0 VALUES LESS THAN (2020),
    PARTITION p1 VALUES LESS THAN (2021),
    PARTITION p2 VALUES LESS THAN (2022),
    PARTITION p3 VALUES LESS THAN MAXVALUE
);

7. 使用覆盖索引
如果查询字段都在索引中，数据库可以直接从索引中获取数据，避免回表。
CREATE INDEX idx_name_created ON user (name, created);

8. 避免全表扫描
确保查询条件能有效利用索引，避免全表扫描。

```

## Redis
### Redis应用

### Redis持久化
#### RDB
```text
RDB:把 Redis 在某一时刻的内存数据快照保存到磁盘上的一个二进制文件（默认名为 dump.rdb）。它可以手动触发，也可以根据配置规则自动触发。
```
#### AOF
```text
AOF:AOF 持久化是将 Redis 执行的每个写命令追加到一个文件（默认名为 appendonly.aof）的末尾。当 Redis 重启时，会重新执行 AOF 文件中的命令来恢复数据。
```
### Redis常见问题
缓存穿透：不存在的key
```text
缓存null值
布隆过滤
增强id的复杂度，避免被猜测id规律
做好数据的基础格式校验
加强用户权限校验
做好热点参数的限流
```
缓存雪崩：多个热点key
```text
给不同的Key的TTL添加随机值
利用Redis集群提高服务的可用性
给缓存业务添加降级限流策略
给业务添加多级缓存
```
缓存击穿：单个热点key
```text
互斥锁
逻辑过期
```

# RabbitMQ
常见消息模型：
```text
基本工作队列(1P1C)
工作消息队列(1P多C)
发布订阅：广播、主题、路由
```

# JVM
## 内存模型
```text
堆：用于存储对象实例和数组，分为新生代，老年代，元空间。线程共享的
栈：存储方法的局部变量、操作数栈、动态链接和方法返回地址等信息。线程私有的
方法区：存储类的元数据信息。线程共享的
```
## OOM
OOM的类型
```text
java.lang.OutOfMemoryError: Java heap space：堆内存不足。
java.lang.OutOfMemoryError: Metaspace：元空间（Metaspace）不足。
java.lang.OutOfMemoryError: Direct buffer memory：直接内存不足。
java.lang.OutOfMemoryError: Unable to create new native thread：线程栈内存不足。
```
## 常见JVM参数
常见JVM参数
```text
-Xms：初始堆大小。
-Xmx：最大堆大小。
-Xss：线程栈大小。
-XX:MaxMetaspaceSize：最大元空间大小。
-Dproperty=value：设置系统属性。
```

# ORM
## 动态标签


# JUC
## 线程
创建方式：
```text
继承thread重写run方法、
实现Runnable、Callable接口、
线程池
```

如何知道线程执行完
```text

```
