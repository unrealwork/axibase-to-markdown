# nmon

Nmon is a system performance monitoring tool designed by [Nigel Griffiths at IBM](http://www.ibm.com/developerworks/aix/library/au-analyze_aix/), originally for AIX, and later ported to Linux .

To this day, nmon remains the preferred data collection daemon on AIX and is gaining traction with Linux administrators as well.


- Single binary, easy to install
- Console and batch mode
- Scheduled with cron
- Collects granular statistics at specified interval
- Collects output of key system commands
- Compact data format


On AIX, nmon is pre-installed on AIX 5.3, 6.1 and newer versions by default, while on older AIX versions 4.1.5, 4.2, 4.3, 5.1 and 5.2 nmon can be installed manually.

On Linux, nmon is [open sourced under GPL license](https://github.com/axibase/nmon). It can be downloaded as an [executable binary](https://github.com/axibase/nmon/releases) or can be compiled from source. Supported distributions include Ubuntu, Debian, RHEL, CentOS, Fedora, SLES, and OpenSUSE.

nmon file format is supported in Axibase Time Series Database natively so that ATSD can be deployed as a centralized repository of nmon-sourced statistics and system commands collected from remote systems while providing access to [Visualization](https://axibase.com/products/axibase-time-series-database/visualization/), [Alerting](/products/axibase-time-series-database/rule-engine/) and [Forecasting](/products/axibase-time-series-database/forecasts/) features.

[](http://axibase.com/products/axibase-time-series-database/visualization/widgets/)

ATSD supports two ways of automated data ingestion from servers gathering nmon statistics:


- [Scheduled upload](https://github.com/axibase/nmon#upload-hourly-files-to-atsd-with-wget) using wget, nc, or Unix pipes. Latency depends on collection interval.
- Streaming transmission of nmon snapshots as they are written into nmon output file using [sender script](/products/axibase-time-series-database/writing-data/nmon/sender-script-2/). This method results in no latency, however it requires more effort to implement.


nmon source code repository: [https://github.com/axibase/nmon](https://github.com/axibase/nmon)

![](http://axibase.com/wp-content/uploads/2015/01/nmon-use-case-ATSD1.jpg)

##### Predefined nmon visualization portal:

##### Launch live AIX nmon Portal in Axibase Chart Lab.




[Launch](/chartlab/b69e4fcd/3/)

![](http://axibase.com/wp-content/uploads/2015/01/nmon-aix-portal-1500.png)

##### Launch live Linux nmon Portal in Axibase Chart Lab.




[Launch](/chartlab/ac003f06)

![](http://axibase.com/wp-content/uploads/2015/01/linux_nmon_portal.png)

